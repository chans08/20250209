import 'package:flutter/material.dart';
import 'package:flutter_20250209/app/common/config/r.dart';
import 'package:flutter_20250209/app/common/ui/edge_insets.dart';

class MainView extends StatelessWidget {
  const MainView({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          width: double.infinity,
          height: 550,
          child: R.image.daesunminheeMain.image(
            fit: BoxFit.cover,
          ),
        ),
        Padding(
          padding: edgeInsets(top: 50, horizontal: 20),
          child: Text(
            '김 대 순 & 차 민 희',
            style: textStyleBlackMedium(30, height: 30/20),
            textAlign: TextAlign.center,
          ),
        ),
        Padding(
          padding: edgeInsets(top: 20, horizontal: 20, bottom: 60),
          child: Text(
            '2025. 02. 09. 일요일 PM 02:00\n메종드아나하 B1 그랜드볼룸홀',
            textAlign: TextAlign.center,
            style: textStyleBlackNormal(18, height: 25/15),
          ),
        ),
      ],
    );
  }
}
