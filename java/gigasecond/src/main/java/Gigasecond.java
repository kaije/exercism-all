import java.time.LocalDate;
import java.time.LocalDateTime;

class Gigasecond {

    LocalDateTime start;
    static final int GIGASECOND_AS_SECONDS = 1000000000;

    Gigasecond(LocalDate moment) {
        this.start = moment.atStartOfDay();
    }

    Gigasecond(LocalDateTime moment) {
        this.start = moment;
    }

    LocalDateTime getDateTime() {
      return this.start.plusSeconds(GIGASECOND_AS_SECONDS);
    }

}
