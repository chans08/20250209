import 'package:flutter/material.dart';
import 'package:flutter_20250209/app/common/config/r.dart';
import 'package:flutter_20250209/app/common/ui/edge_insets.dart';
import 'package:get/get.dart';
import 'package:url_launcher/url_launcher.dart';

Future<T> contactDialog<T>() async {
  return await Get.generalDialog(
      barrierDismissible: true,
      barrierLabel: Get.context != null
          ? MaterialLocalizations.of(Get.context!).dialogLabel
          : null,
      pageBuilder: (context, _, __) {
        return Container(
          margin: edgeInsets(all: 30),
          alignment: Alignment.center,
          child: Card(
            clipBehavior: Clip.hardEdge,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(16),
            ),
            elevation: 5,
            child: Container(
              constraints: const BoxConstraints(minWidth: 100, maxWidth: 500),
              padding: edgeInsets(top: 10, bottom: 30, horizontal: 40),
              color: R.color.white,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  R.image.icon_pigeon.image(),
                  const SizedBox(height: 5),
                  Text(
                    '혼주에게 연락하기',
                    style: textStyleBlackBold(24),
                  ),
                  const SizedBox(height: 40),
                  _buildContactRow('신랑 부', '김종희', '010-9450-8632'),
                  _buildContactRow('신랑 모', '민연심', '010-4200-9845'),
                  _buildContactRow('신부 부', '차성은', '010-5409-9522'),
                  _buildContactRow('신부 모', '이  호', '010-9400-5635'),
                ],
              ),
            ),
          ),
        );
      });
}

Widget _buildContactRow(String title, String name, String phoneNumber) {
  return SizedBox(
    height: 50,
    child: Row(
      children: [
        Text(
          title,
          style: textStyleLight(R.color.color_171819, 20),
        ),
        const Spacer(),
        Text(
          name,
          style: textStyleBlackBold(24),
        ),
        const Spacer(),
        Padding(
          padding: edgeInsets(top: 5),
          child: IconButton(
            onPressed: () {
              _makePhoneCall(phoneNumber);
            },
            icon: R.image.icon_phone.image(width: 24),
          ),
        ),
        Padding(
          padding: edgeInsets(top: 5),
          child: IconButton(
            onPressed: () {
              _makeSms(phoneNumber);
            },
            icon: R.image.icon_email.image(width: 24),
          ),
        ),
      ],
    ),
  );
}

Future<void> _makePhoneCall(String phoneNumber) async {
  final Uri launchUri = Uri(
    scheme: 'tel',
    path: phoneNumber,
  );
  await launchUrl(launchUri);
}

Future<void> _makeSms(String phoneNumber) async {
  final Uri launchUri = Uri(
    scheme: 'sms',
    path: phoneNumber,
  );
  await launchUrl(launchUri);
}
