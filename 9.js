class UserController {
  static index(request) {
    return request.do(
      getUsers(),
      encodeAllStrings(),
      computePopularity(),
      attachLocation()
    );
  }
}
