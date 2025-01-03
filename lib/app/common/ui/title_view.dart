import 'package:flutter/material.dart';
import 'package:flutter_20250209/app/common/config/r.dart';

class TitleView extends StatelessWidget {
  final String title;
  const TitleView(this.title, {super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        R.image.icon_ribbon.image(),
        Text(
          title,
          style: textStyleNormal(R.color.color_594E47, 30,
              fontFamily: FontFamily.cormorantGaramondFont),
        ),
      ],
    );
  }
}
