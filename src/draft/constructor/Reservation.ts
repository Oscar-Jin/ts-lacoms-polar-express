export enum ReservationState {
  reserved = "reserved",
  attended = "attended",
  cancelled = "cancelled",
  cancelledWithPenalty = "cancelledWithPenalty",
  cancelledWithPenaltyButRefundedAnyways = "cancelledWithPenaltyButRefundedAnyways",
  noShow = "noShow",
}

export class Reservation {
  constructor(
    public lastName_hiragana: string,
    public firstName_hiragana: string,
    public lastName_kanji: string,
    public firstName_kanji: string,
    public uid: string,
    public lessonID: string,
    // public ticketID: string,

    public year: number,
    public month: number,
    public date: number,
    public hour: number,
    public minute: number,
    public iso8601: string,
    public timeString: string,

    public lessonName: string,
    public instructorName: string,

    public isNewStudent: boolean,
    public isFirstLesson: boolean,
    public isRegulars: boolean,

    public state: string,
    public note: string,

    public createdOn: string,
    public updatedOn: string,
    public createdBy: string,
    public updatedBy: string,
    public doctype: string,
    public id: string
  ) {}

  static load(reservation: Reservation) {
    return new Reservation(
      reservation.lastName_hiragana,
      reservation.firstName_hiragana,
      reservation.lastName_kanji,
      reservation.firstName_kanji,
      reservation.uid,
      reservation.lessonID,
      reservation.year,
      reservation.month,
      reservation.date,
      reservation.hour,
      reservation.minute,
      reservation.iso8601,
      reservation.timeString,
      reservation.lessonName,
      reservation.instructorName,
      reservation.isNewStudent,
      reservation.isFirstLesson,
      reservation.isRegulars,
      reservation.state,
      reservation.note,
      reservation.createdOn,
      reservation.updatedOn,
      reservation.createdBy,
      reservation.updatedBy,
      reservation.doctype,
      reservation.id
    );
  }
}
