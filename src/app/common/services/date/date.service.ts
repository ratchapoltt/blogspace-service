import { environment } from "@environment";
import { Injectable } from "@nestjs/common";

import "dayjs/locale/th";

import dayjs from "dayjs";
import buddhistEraDayjsPlugin from "dayjs/plugin/buddhistEra";
import isTodayDayjsPlugin from "dayjs/plugin/isToday";
import isTomorrowDayjsPlugin from "dayjs/plugin/isTomorrow";
import isYesterdayDayjsPlugin from "dayjs/plugin/isYesterday";
import timezoneDayjsPlugin from "dayjs/plugin/timezone";

import { IDate } from "./types";

@Injectable()
export class DateService {
  public constructor() {
    dayjs.extend(timezoneDayjsPlugin);
    dayjs.extend(buddhistEraDayjsPlugin);
    dayjs.extend(isTodayDayjsPlugin);
    dayjs.extend(isTomorrowDayjsPlugin);
    dayjs.extend(isYesterdayDayjsPlugin);

    dayjs.tz.setDefault(environment.system.date.timezone);
  }

  public now(): Date {
    return dayjs().toDate();
  }

  public timestamp(date?: IDate): number {
    if (date !== null && date !== undefined) {
      return dayjs(date).unix();
    }

    return dayjs().unix();
  }

  public millisecond(date?: IDate): number {
    if (date !== null && date !== undefined) {
      return dayjs(date).millisecond();
    }

    return dayjs().millisecond();
  }

  public second(date?: IDate): number {
    if (date !== null && date !== undefined) {
      return dayjs(date).second();
    }

    return dayjs().second();
  }

  public minute(date?: IDate): number {
    if (date !== null && date !== undefined) {
      return dayjs(date).minute();
    }

    return dayjs().minute();
  }

  public hour(date?: IDate): number {
    if (date !== null && date !== undefined) {
      return dayjs(date).hour();
    }

    return dayjs().hour();
  }

  public day(date?: IDate): number {
    if (date !== null && date !== undefined) {
      return dayjs(date).day() + 1;
    }

    return dayjs().day() + 1;
  }

  public dayLongName(date?: IDate): string {
    if (date !== null && date !== undefined) {
      return dayjs(date, { locale: "en" }).format("dddd");
    }

    return dayjs(new Date(), { locale: "en" }).format("dddd");
  }

  public dayLongNameTH(date?: IDate): string {
    if (date !== null && date !== undefined) {
      return dayjs(date, { locale: "th" }).format("dddd");
    }

    return dayjs(new Date(), { locale: "th" }).format("dddd");
  }

  public dayMiddleName(date?: IDate): string {
    if (date !== null && date !== undefined) {
      return dayjs(date, { locale: "en" }).format("ddd");
    }

    return dayjs(new Date(), { locale: "en" }).format("ddd");
  }

  public dayShortName(date?: IDate): string {
    if (date !== null && date !== undefined) {
      return dayjs(date, { locale: "en" }).format("dd");
    }

    return dayjs(new Date(), { locale: "en" }).format("dd");
  }

  public dayShortNameTH(date?: IDate): string {
    if (date !== null && date !== undefined) {
      return dayjs(date, { locale: "th" }).format("dd");
    }

    return dayjs(new Date(), { locale: "th" }).format("dd");
  }

  public date(date?: IDate): number {
    if (date !== null && date !== undefined) {
      return dayjs(date).date();
    }

    return dayjs().date();
  }

  public month(date?: IDate): number {
    if (date !== null && date !== undefined) {
      return dayjs(date).month() + 1;
    }

    return dayjs().month() + 1;
  }

  public monthLongName(date?: IDate): string {
    if (date !== null && date !== undefined) {
      return dayjs(date, { locale: "en" }).format("MMMM");
    }

    return dayjs(new Date(), { locale: "en" }).format("MMMM");
  }

  public monthLongNameTH(date?: IDate): string {
    if (date !== null && date !== undefined) {
      return dayjs(date, { locale: "th" }).format("MMMM");
    }

    return dayjs(new Date(), { locale: "th" }).format("MMMM");
  }

  public monthShortName(date?: IDate): string {
    if (date !== null && date !== undefined) {
      return dayjs(date, { locale: "en" }).format("MMM");
    }

    return dayjs(new Date(), { locale: "en" }).format("MMM");
  }

  public monthShortNameTH(date?: IDate): string {
    if (date !== null && date !== undefined) {
      return dayjs(date, { locale: "th" }).format("MMM");
    }

    return dayjs(new Date(), { locale: "th" }).format("MMM");
  }

  public year(date?: IDate): number {
    if (date !== null && date !== undefined) {
      return dayjs(date).year();
    }

    return dayjs().year();
  }

  public convertISO(date: IDate): string {
    return dayjs(date).toISOString();
  }

  public convertDDMMYYYY(date: IDate, separator: string): string {
    return dayjs(date).format(`DD${separator}MM${separator}YYYY`);
  }

  public convertDDMMBBBB(date: IDate, separator: string): string {
    return dayjs(date).format(`DD${separator}MM${separator}BBBB`);
  }

  public convertDDMMYYYYHHmmss(date: IDate, separator: string): string {
    return dayjs(date).format(`DD${separator}MM${separator}YYYY HH:mm:ss`);
  }

  public convertDDMMBBBBHHmmss(date: IDate, separator: string): string {
    return dayjs(date).format(`DD${separator}MM${separator}BBBB HH:mm:ss`);
  }

  public convertDDMMYYYYHHmmsssss(date: IDate, separator: string): string {
    return dayjs(date).format(`DD${separator}MM${separator}YYYY HH:mm:ss.sss`);
  }

  public convertDDMMBBBBHHmmsssss(date: IDate, separator: string): string {
    return dayjs(date).format(`DD${separator}MM${separator}BBBB HH:mm:ss.sss`);
  }

  public convertDDMMYYYYhhmmss(date: IDate, separator: string): string {
    return dayjs(date).format(`DD${separator}MM${separator}YYYY hh:mm:ss`);
  }

  public convertDDMMBBBBhhmmss(date: IDate, separator: string): string {
    return dayjs(date).format(`DD${separator}MM${separator}BBBB hh:mm:ss`);
  }

  public convertDDMMYYYYhhmmssA(date: IDate, separator: string): string {
    return dayjs(date).format(`DD${separator}MM${separator}YYYY hh:mm:ss A`);
  }

  public convertDDMMBBBBhhmmssA(date: IDate, separator: string): string {
    return dayjs(date).format(`DD${separator}MM${separator}BBBB hh:mm:ss A`);
  }

  public convertDDMMYYYYhhmmsssss(date: IDate, separator: string): string {
    return dayjs(date).format(`DD${separator}MM${separator}YYYY hh:mm:ss.sss`);
  }

  public convertDDMMBBBBhhmmsssss(date: IDate, separator: string): string {
    return dayjs(date).format(`DD${separator}MM${separator}BBBB hh:mm:ss.sss`);
  }

  public convertDDMMYYYYhhmmsssssA(date: IDate, separator: string): string {
    return dayjs(date).format(`DD${separator}MM${separator}YYYY hh:mm:ss.sss A`);
  }

  public convertDDMMBBBBhhmmsssssA(date: IDate, separator: string): string {
    return dayjs(date).format(`DD${separator}MM${separator}BBBB hh:mm:ss.sss A`);
  }

  public convertYYYYMMDD(date: IDate, separator: string): string {
    return dayjs(date).format(`YYYY${separator}MM${separator}DD`);
  }

  public convertBBBBMMDD(date: IDate, separator: string): string {
    return dayjs(date).format(`BBBB${separator}MM${separator}DD`);
  }

  public convertYYYYMMDDHHmmss(date: IDate, separator: string): string {
    return dayjs(date).format(`YYYY${separator}MM${separator}DD HH:mm:ss`);
  }

  public convertBBBBMMDDHHmmss(date: IDate, separator: string): string {
    return dayjs(date).format(`BBBB${separator}MM${separator}DD HH:mm:ss`);
  }

  public convertYYYYMMDDHHmmsssss(date: IDate, separator: string): string {
    return dayjs(date).format(`YYYY${separator}MM${separator}DD HH:mm:ss.sss`);
  }

  public convertBBBBMMDDHHmmsssss(date: IDate, separator: string): string {
    return dayjs(date).format(`BBBB${separator}MM${separator}DD HH:mm:ss.sss`);
  }

  public convertYYYYMMDDhhmmss(date: IDate, separator: string): string {
    return dayjs(date).format(`YYYY${separator}MM${separator}DD hh:mm:ss`);
  }

  public convertBBBBMMDDhhmmss(date: IDate, separator: string): string {
    return dayjs(date).format(`BBBB${separator}MM${separator}DD hh:mm:ss`);
  }

  public convertYYYYMMDDhhmmssA(date: IDate, separator: string): string {
    return dayjs(date).format(`YYYY${separator}MM${separator}DD hh:mm:ss A`);
  }

  public convertBBBBMMDDhhmmssA(date: IDate, separator: string): string {
    return dayjs(date).format(`BBBB${separator}MM${separator}DD hh:mm:ss A`);
  }

  public convertYYYYMMDDhhmmsssss(date: IDate, separator: string): string {
    return dayjs(date).format(`YYYY${separator}MM${separator}DD hh:mm:ss.sss`);
  }

  public convertBBBBMMDDhhmmsssss(date: IDate, separator: string): string {
    return dayjs(date).format(`BBBB${separator}MM${separator}DD hh:mm:ss.sss`);
  }

  public convertYYYYMMDDhhmmsssssA(date: IDate, separator: string): string {
    return dayjs(date).format(`YYYY${separator}MM${separator}DD hh:mm:ss.sss A`);
  }

  public convertBBBBMMDDhhmmsssssA(date: IDate, separator: string): string {
    return dayjs(date).format(`BBBB${separator}MM${separator}DD hh:mm:ss.sss A`);
  }
}
