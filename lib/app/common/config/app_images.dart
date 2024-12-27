import 'package:flutter/material.dart';

// ignore_for_file: non_constant_identifier_names
class AppImages {
  static final AppImages _instance = AppImages._internal();

  factory AppImages() => _instance;

  AppImages._internal();

  static const String _imagePath = 'assets/images/';
  static const String _iconPath = '${_imagePath}icons/';
  static const String _daesunminheePath = '${_imagePath}daesun_minhee/';

  AppImage get daesunminheeMain =>
      const AppImage('${_daesunminheePath}daesun_minhee_main.jpg');
  AppImage get daesunminhee1 =>
      const AppImage('${_daesunminheePath}daesun_minhee_1.jpg');
  AppImage get daesunminhee2 =>
      const AppImage('${_daesunminheePath}daesun_minhee_2.jpg');
  AppImage get daesunminhee3 =>
      const AppImage('${_daesunminheePath}daesun_minhee_3.jpg');
  AppImage get daesunminhee4 =>
      const AppImage('${_daesunminheePath}daesun_minhee_4.jpg');
  AppImage get daesunminhee5 =>
      const AppImage('${_daesunminheePath}daesun_minhee_5.jpg');
  AppImage get daesunminhee6 =>
      const AppImage('${_daesunminheePath}daesun_minhee_6.jpg');
  AppImage get daesunminhee7 =>
      const AppImage('${_daesunminheePath}daesun_minhee_7.jpg');
  AppImage get daesunminhee8 =>
      const AppImage('${_daesunminheePath}daesun_minhee_8.jpg');
  AppImage get daesunminhee9 =>
      const AppImage('${_daesunminheePath}daesun_minhee_9.jpg');
  AppImage get daesunminhee10 =>
      const AppImage('${_daesunminheePath}daesun_minhee_10.jpg');
  AppImage get daesunminhee11 =>
      const AppImage('${_daesunminheePath}daesun_minhee_11.jpg');
  AppImage get daesunminhee12 =>
      const AppImage('${_daesunminheePath}daesun_minhee_12.jpg');
  AppImage get daesunminhee13 =>
      const AppImage('${_daesunminheePath}daesun_minhee_13.jpg');
  AppImage get daesunminhee14 =>
      const AppImage('${_daesunminheePath}daesun_minhee_14.jpg');
  AppImage get daesunminhee15 =>
      const AppImage('${_daesunminheePath}daesun_minhee_15.jpg');

  AppImage get banner =>
      const AppImage('${_imagePath}banner.png');
  AppImage get bg_img_white => const AppImage('${_imagePath}bg_img_white.jpg');
  AppImage get map => const AppImage('${_imagePath}map.png');

  AppImage get icon_ribbon =>
      const AppImage('${_iconPath}ribbon.png');
  AppImage get icon_botanical =>
      const AppImage('${_iconPath}botanical.png');
  AppImage get icon_phone_round =>
      const AppImage('${_iconPath}phone_round.png');
  AppImage get icon_phone =>
      const AppImage('${_iconPath}phone.png');
  AppImage get icon_email =>
      const AppImage('${_iconPath}email.png');
  AppImage get icon_pigeon =>
      const AppImage('${_iconPath}pigeon.png');
  AppImage get icon_down =>
      const AppImage('${_iconPath}down.png');
  AppImage get icon_up =>
      const AppImage('${_iconPath}up.png');
  AppImage get icon_link =>
      const AppImage('${_iconPath}link.png');
  AppImage get icon_close =>
      const AppImage('${_iconPath}close.png');
  AppImage get icon_left =>
      const AppImage('${_iconPath}left.png');
  AppImage get icon_right =>
      const AppImage('${_iconPath}right.png');
}

class AppImage {
  final String path;

  const AppImage(this.path);

  Image image({
    Key? key,
    double? width,
    double? height,
    BoxFit? fit,
    ImageRepeat repeat = ImageRepeat.noRepeat,
  }) {
    return Image.asset(
      path,
      key: key,
      width: width,
      height: height,
      fit: fit,
      repeat: repeat,
    );
  }

  Image imageSize({
    Key? key,
    double? size,
    BoxFit fit = BoxFit.fill,
    ImageRepeat repeat = ImageRepeat.noRepeat,
  }) {
    return Image.asset(
      path,
      key: key,
      width: size,
      height: size,
      fit: fit,
      repeat: repeat,
    );
  }
}
