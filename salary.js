/*
Baza Memento Database na Androida. Autor Marceli Matynia 300 Sp. z o.o.
*/
try {

  function getLabel(nr, e) {

    const currentDay = nr.toString();
    const month = e.field(SAL_FIELD_MONTH);
    const weekday_en = moment(month).startOf('month').add((nr - 1), 'days').format('dddd');
    const weekday_pl = WEEKDAYS2_PL[WEEKDAYS_EN.indexOf(weekday_en)];

    const month_pl = MONTHS3_PL[(moment(month).format('M')) - 1];
    const day = moment(month).startOf('month').add((nr - 1), 'days').format('DD');

    let addInfo = "";

    if (e.field(SAL_FIELD_WEEKENDDUTY).indexOf(currentDay) >= 0) {
      addInfo = " - " + SAL_FIELD_WEEKENDDUTY.toLowerCase();
    } else if (e.field(SAL_FIELD_WEEKENDS).indexOf(currentDay) >= 0) {
      addInfo = " - " + SAL_FIELD_WEEKENDS.toLowerCase();
    } else if (e.field(SAL_FIELD_ABSENCE).indexOf(currentDay) >= 0) {
      addInfo = " - " + SAL_FIELD_ABSENCE.toLowerCase();
    } else if (e.field(SAL_FIELD_HOLIDAY).indexOf(currentDay) >= 0) {
      addInfo = " - " + SAL_FIELD_HOLIDAY.toLowerCase();
    } else if (e.field(SAL_FIELD_SICK).indexOf(currentDay) >= 0) {
      addInfo = " - " + SAL_FIELD_SICK.toLowerCase();
    };
    return (weekday_pl + ": " + day + "." + month_pl + addInfo)
  };


  const Salary = function (e) {
    log("Salary: " + String(e));
    try {
      if (e !== undefined) {

        this.entry = e;
        this.amountCash = 0;
        this.amountWithdrwal = 0;
        this.dateCash = null;
        this.dateWithdrwal = null;
        this.isClosed = false;
        this.entryEmployee = null;
        this.isVisible = false;
        this.payerName = this.entry.field(SAL_FIELD_PAYER);
        this.description = this.entry.field(SAL_FIELD_DESCRIPTION);
        this.type = this.entry.field(SAL_FIELD_PAYMENT_TYPE);
        this.holidayTotal = 0;
        this.holidayUsed = 0;
        this.holidayCurrent = 0;

        this.isVisible = this.entry.field(FIELD_CAN_ACCESS);
        if (this.entry.field(SAL_FIELD_EMPLOYEE_LINK).length > 0) {
          this.entryEmployee = this.entry.field(SAL_FIELD_EMPLOYEE_LINK)[0];
          this.holidayTotal = this.entryEmployee.field(EMP_FIELD_HOLIDAY_TOTAL);
          this.holidayUsed = this.entryEmployee.field(EMP_FIELD_HOLIDAY_USED);
          this.holidayCurrent = this.entry.field(SAL_FIELD_HOLIDAY);
        }
        if (!isNaN(this.entry.field(SAL_FIELD_CASH_AMOUNT))) this.amountCash = this.entry.field(SAL_FIELD_CASH_AMOUNT);
        if (!isNaN(this.entry.field(SAL_FIELD_WITHDRAWAL_AMOUNT))) this.amountWithdrwal = this.entry.field(SAL_FIELD_WITHDRAWAL_AMOUNT);
        if (this.entry.field(SAL_FIELD_CLOSED) == SAL_FIELD_CLOSED_VALUE_YES) this.isClosed = true;
        if (this.entry.field(SAL_FIELD_WITHDRAWAL_DATE) != "") this.dateWithdrwal = this.entry.field(SAL_FIELD_WITHDRAWAL_DATE);
        if (this.entry.field(SAL_FIELD_CASH_DATE) != "") this.dateCash = this.entry.field(SAL_FIELD_CASH_DATE);
      }

      // funckja opis 

      this.creatingNewEntry_setValues = function () {
        log("creatingNewEntry_setValues");
        try {
          let prevMonth = moment().startOf("month").add(-1, "month");
          let dayEnd = parseInt(
            moment().startOf("month").add(-1, "month").endOf("month").format("D")
          );
          let weekends = new Array();
          let payer = arrNames[arrEditors.indexOf(user().username)];

          this.entry.set(SAL_FIELD_PAYER, payer);
          this.entry.set(SAL_FIELD_MONTH, prevMonth.toDate());

          setEntryDefaultValues(this.entry);

          let i = 1;
          while (i <= dayEnd) {
            if (prevMonth.isoWeekday() == 6 || prevMonth.isoWeekday() == 7) {
              weekends.push(i);
            }
            prevMonth = prevMonth.add(1, "day");
            i++;
          }

          this.entry.set(SAL_FIELD_WEEKENDS, weekends);
        } catch (er) {
          log("creatingNewEntry_setValues: " + err);
        }
      };


      // funckja waliduje 

      this.updatingEntry_validateBeforeSave = function () {
        log("updatingEntry_validateBeforeSave");
        try {
          let msg = SAL_MSG_VALIDATION_ERR;
          let canSave = true;

          if (this.amountWithdrwal > 0 && this.dateWithdrwal == null) {
            msg += "\n" + SAL_MSG_VALIDATION_ERR_NO_WITHDRWAL;
            canSave = false;
          }

          if (this.amountCash > 0 && this.dateCash == null) {
            msg += "\n" + SAL_MSG_VALIDATION_ERR_NO_CASH;
            canSave = false;
          }

          if (!canSave) {
            message(msg);
          }

          return canSave;
        } catch (er) {
          log("updatingEntry_validateBeforeSave: " + err);
        }
      };

      // funkcja zamyka rozliczenie, tj tworzy wpisu w bazie wydatków, ustawia wartość pola SAL_FIELD_CLOSED na SAL_FIELD_CLOSED_VALUE_YES i ustawia pole  edytorów żeby nie można było edytować 

      this.closeSettlement = function (reopenEntry) {
        log("closeSettlement: " + reopenEntry);
        try {
          message(SAL_MSG_CLOSING + this.entryEmployee.name);

          if (this.canCloseSettlement(true)) {
            if (!this.isVisible) entry.set(FIELD_CAN_ACCESS, true);
            if (this.dateWithdrwal != null && this.amountWithdrwal > 0) {
              let entrySpendWithdrwal = this.createSpendEntry(
                this.amountWithdrwal,
                this.dateWithdrwal,
                SAL_WITHDRWAL_MAKER,
                this.description,
                this.entryEmployee,
                true
              );
              this.entry.link(SAL_FIELD_SPEND_LINK, entrySpendWithdrwal);
            }
            if (this.dateCash != null && this.amountCash > 0) {
              let entrySpendCash = this.createSpendEntry(
                this.amountCash,
                this.dateCash,
                this.payerName,
                this.description,
                this.entryEmployee,
                false
              );
              this.entry.link(SAL_FIELD_SPEND_LINK, entrySpendCash);
            }
            this.entry.set(FIELD_CAN_ACCESS, this.isVisible);
            this.entry.set(SAL_FIELD_CLOSED, SAL_FIELD_CLOSED_VALUE_YES);
            this.entry.set(FIELD_EDITOR, ARR_MANAGERS);
            this.entryEmployee.set(EMP_FIELD_HOLIDAY_USED, (this.holidayUsed + this.holidayCurrent));
            this.entry.recalc();
            if (reopenEntry) this.entry.show();
          } else {
            message(SAL_ERR_CLOSED_OR_NOACCESS);
          }
        } catch (err) {
          log("closeSettlement: " + err)
        }
      };

      // funkcja zamyka rozliczenie, tj tworzy wpisu w bazie wydatków, ustawia wartość pola zamknięte na 

      this.findAdvances = function (show) {
        log("findAdvances: " + reopenEntry);
        try {
          message(SAL_MSG_RUNING_FINDADVANCE);

          let libSpendings = libByName(LIB_SPANDINGS_NAME);
          if (libSpendings !== undefined) {

            if (this.entryEmployee !== undefined && !this.isClosed) {

              let spendsAdvanceTypes = new Array(SPE_FIELD_TYPE_VALUE_ADVANCEPAYMENT_CASH, SPE_FIELD_TYPE_VALUE_ADVANCEPAYMENT_WITHDRAWAL);
              let entiesSpend = libSpendings.linksTo(this.entry.field(SAL_FIELD_EMPLOYEE_LINK)[0]);

              for (i = 0; i < entiesSpend.length; i++) {

                let entrySpend = entiesSpend[i];
                let momEntry = moment(entrySpend.field(SPE_FIELD_DATE));
                let momStart = moment().startOf("month").add({ days: 18, months: -1 });
                let momEnd = moment();
                if (
                  spendsAdvanceTypes.indexOf(entrySpend.field(SPE_FIELD_TYPE)) >= 0 &&
                  momEntry.isBetween(momStart, momEnd) &&
                  !isEntryLinked(this.entry.field(SAL_FIELD_ADVANCE_PAYMENT), entrySpend)) {
                  this.entry.link(SAL_FIELD_ADVANCE_PAYMENT, entrySpend);
                }
              }

              this.entry.recalc();
              if (show) {
                this.entry.show();
              }
            }
          }
        } catch (err) {
          log("findAdvances: " + err)
        }
      };

      // funkcja tworzy nowy wpis w bazie wydatków

      this.createSpendEntry = function (
        amount,
        date,
        payer,
        description,
        entryEmployee,
        isWithdrwal
      ) {

        log("createSpendEntry: " + String(amount) + ", " +
          String(date) + ", " +
          String(payer) + ", " +
          String(description) + ", " +
          String(entryEmployee) + ", " +
          String(isWithdrwal) + ", ");
        try {
          message(SAL_MSG_CREATING_SPEND + amount + ", " + payer);

          let entrySpend = new Object();
          let libSpendings = libByName(LIB_SPANDINGS_NAME);

          if (libSpendings !== undefined) {
            entrySpend = libSpendings.create(entrySpend);
            setEntryDefaultValues(entrySpend);
            entrySpend.set(SPE_FIELD_AMOUNT, 0 - Math.abs(amount));
            entrySpend.set(SPE_FIELD_DATE, date);
            entrySpend.set(SPE_FIELD_CREATOR, payer);
            entrySpend.set(SPE_FIELD_EMPLOYEE_LINK, entryEmployee);
            entrySpend.set(SPE_FIELD_DESCRIPTION, description);
            if (isWithdrwal) {
              entrySpend.set(SPE_FIELD_TYPE, SPE_FIELD_TYPE_VALUE_EMPLOYEE_WITHDRAWAL);
            } else {
              entrySpend.set(SPE_FIELD_TYPE, SPE_FIELD_TYPE_VALUE_EMPLOYEE_CASH);
            }
            //assignToBudget(entrySpend);
            entrySpend.recalc();
          }
          return entrySpend;
        } catch (err) {
          log("closeSettlement: " + err)
        }
      };

      // funkcja sprawdza czy można zamknąć rozliczenie tj czy aktualny user jest managerem i czy są wpisane kwoty i daty

      this.canCloseSettlement = function (showAlert) {
        log("canCloseSettlement: " + showAlert);
        try {
          let can = false;
          let isManager = false;

          if ((this.amountCash + this.amountWithdrwal > 0) && (this.isClosed == false)) {
            can = true;
          } else if (showAlert) {
            message(SAL_ERR_CLOSED_OR_NOACCESS);
          }
          return can;
        } catch (err) {
          log("canCloseSettlement: " + err)
        }
      };


      this.copyToMonth = function (selected, month) {
        log("copyToMonth: " + String(selected) + " " + month);
        try {
          let lib = libByName(LIB_SALARIES_NAME);
          let dt = moment(month).startOf("month");
          let dayEnd = parseInt(moment(month).endOf("month").format("D"));
          let weekDays = new Array();

          let i = 1;
          while (i <= dayEnd) {
            if (dt.isoWeekday() == 6 || dt.isoWeekday() == 7) {
              weekDays.push(i);
            }
            dt = dt.add(1, "day");
            i++;
          }

          // kopiowanie
          dt = moment(month).startOf("month");
          message(MSG_UPDATING + " " + selected.length + " " + MSG_ENTRIES);
          for (count = 0; count < selected.length; count++) {
            let entrySource = selected[count];
            let entryTarget = new Object();
            entryTarget[SAL_FIELD_MONTH] = dt.toDate();
            entryTarget[FIELD_EDITOR] = arrEditors;
            entryTarget[SAL_FIELD_WEEKENDS] = weekDays;
            entryTarget[SAL_FIELD_EMPLOYEE_LINK] = entrySource.field(
              SAL_FIELD_EMPLOYEE_LINK
            )[0];
            entryTarget[SAL_FIELD_CONTRACT] = entrySource.field(
              SAL_FIELD_CONTRACT
            )[0];
            entryTarget[SAL_FIELD_PAYMENT_TYPE] = entrySource.field(
              SAL_FIELD_PAYMENT_TYPE
            );
            entryTarget[SAL_FIELD_PAYER] = entrySource.field(SAL_FIELD_PAYER);
            entryTarget[SAL_FIELD_PAYER] = entrySource.field(SAL_FIELD_PAYER);
            entryTarget[SAL_FIELD_CLOSED] = SAL_FIELD_CLOSED_VALUE_NO;
            entryTarget = lib.create(entryTarget);
            setDefault(entryTarget);
            findAdvances(false);
          }
          message(MSG_FINISHED);
        } catch (err) {
          log("copyToMonth: " + err)
        }
      };


    } catch (er) {
      log("Salary: " + err);
    }
  }

} catch (er) {
  log("salary.js: " + err);
}