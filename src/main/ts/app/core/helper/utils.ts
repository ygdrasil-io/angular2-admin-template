

export class Utils {
  public static CopyProperties(source: any, target: any): void {    
    for (var prop in source) {
      if (target[prop] !== undefined) {
        target[prop] = source[prop];
      } else {
        console.error("Cannot set undefined property: " + prop);
      }
    }
  }
}
