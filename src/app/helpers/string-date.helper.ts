export class StringDateHelper {
  static LongToShortDatetime(a: string): string {
    return `${a.substring(8, 10)}/${a.substring(5, 7)}/${a.substring(0, 4)} ${a.substring(11, 16)}`;
  }
}
