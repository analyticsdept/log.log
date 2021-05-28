import { LogLogCategories } from "./_categories";
import { LogLogLevels } from "./_levels";
import { LogLogLogger } from "./_logger";

class LogLog {
  constructor({ enabled = false, level = null } = {}) {
    this.categories = new LogLogCategories();
    this.enabled = enabled;
    this.level = level;
    this.logger = new LogLogLogger();
    this.levels = new LogLogLevels();
  }

  log(message, category) {
    if (
      this.enabled &&
      this.level <= this.levels.INFO &&
      this.categories.check(category)
    ) {
      this.logger.log(message);
    }
  }

  json(message, category) {
    if (
      this.enabled &&
      this.level <= this.levels.INFO &&
      this.categories.check(category)
    ) {
      this.logger.json(message);
    }
  }

  info(message, category) {
    let args = Array.prototype.slice.call(arguments);
    let _msg = args.join(" ");
    if (
      this.enabled &&
      this.level <= this.levels.INFO &&
      this.categories.check(category)
    ) {
      this.logger.info(_msg);
    }
  }
  debug(message, category) {
    let args = Array.prototype.slice.call(arguments);
    let _msg = args.join(" ");
    if (
      this.enabled &&
      this.level <= this.levels.DEBUG &&
      this.categories.check(category)
    ) {
      this.logger.debug(_msg);
    }
  }
  warn(message, category) {
    let args = Array.prototype.slice.call(arguments);
    let _msg = args.join(" ");
    if (
      this.enabled &&
      this.level <= this.levels.WARN &&
      this.categories.check(category)
    ) {
      this.logger.warn(_msg);
    }
  }
  error(message, category) {
    let args = Array.prototype.slice.call(arguments);
    let _msg = args.join(" ");
    if (
      this.enabled &&
      this.level <= this.levels.ERROR &&
      this.categories.check(category)
    ) {
      this.logger.error(_msg);
    }
  }
}

export default LogLog;
