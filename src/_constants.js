class LogLogConstants {
  get LogLog_Prefix_Default() {
    return "[LogLog]";
  }
  get LogLog_Prefix_Unformatted() {
    return this.LogLog_Prefix_Default + " unformatted log:";
  }
  get LogLog_Log_Info_Format() {
    return "{} {}";
  }
  get LogLog_Log_Debug_Format() {
    return "{} {}";
  }
  get LogLog_Log_Warn_Format() {
    return "{} {}";
  }
  get LogLog_Log_Error_Format() {
    return "{} {}";
  }
}

export default LogLogConstants;
