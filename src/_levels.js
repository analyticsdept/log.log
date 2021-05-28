class LogLogLevels {
  get INFO() {
    return 1;
  }
  get DEBUG() {
    return 2;
  }

  get WARN() {
    return 3;
  }

  get ERROR() {
    return 4;
  }

  enumerateLevel(level) {
    _level = level.toUpperCase();
    return this[_level];
  }
}

export default LogLogLevels;
