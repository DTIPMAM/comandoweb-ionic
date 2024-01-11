import { format, parse } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export const TZ_MANAUS: string = "America/Manaus";

export class DateUtils {
    public static dateToSecondsTimestamp(dateString: string, timeZone: string): number {
        const formatString = 'dd/MM/yyyy';
        const date = parse(dateString, formatString, new Date());
      
        // Check if the date is valid
        if (isNaN(date.getTime())) {
          console.error('Invalid date format!');
          return 0;
        }
      
        const timeZoneDate = utcToZonedTime(date, timeZone);
        const secondsTimestamp = timeZoneDate.getTime() / 1000;
        return secondsTimestamp;
    }
}