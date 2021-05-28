import { strf } from "./constants";
import { LogLogConstants } from "./_constants";

class LogLogLogger {
  constructor({ prefix = null } = {}) {
    this.constants = new LogLogConstants();
    this.prefix = prefix;
  }
  log(message) {
      console.log(this.constants.LogLog_Prefix_Unformatted);
    console.log(
      message;
    );
  }
  json(message) {
    console.log(JSON.stringify(message, null, 4));
  }
  info(message) {
    console.log(
      this.constants.LogLog_Log_Info_Format.format(this.prefix, message);
    );
  }
  debug(message) {
    console.log(
      this.constants.LogLog_Log_Debug_Format.format(this.prefix, message);
    );
  }
  warn(message) {
    console.warn(
      this.constants.LogLog_Log_Warn_Format.format(this.prefix, message);
    );
  }
  error(message) {
    console.error(
      this.constants.LogLog_Log_Error_Format.format(this.prefix, message);
    );
  }
}

export default LogLogLogger;
