import 'package:flutter/material.dart';
import 'package:flutter_20250209/app/common/config/r.dart';
import 'package:flutter_20250209/app/common/ui/edge_insets.dart';

class GreetingView extends StatelessWidget {
  const GreetingView({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: R.color.color_DED4DA,
      child: Column(
        children: [
          Padding(
            padding: edgeInsets(horizontal: 60, top: 70, bottom: 50),
            child: R.image.banner.image(),
          ),
          Text(
            '하얀 눈처럼 순수한 사람을 만나\n드디어 결혼합니다.\n그동안 아껴주신 마음 그대로\n사랑과 존중의 마음을 품고 함께 살겠습니다.\n오셔서 따뜻한 마음으로 축복해 주시면\n평생 잊을 수 없는\n따스한 겨울로 남기겠습니다.',
            style: textStyle300(R.color.color_1E403A, 18, height: 40/15),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 100)
        ],
      ),
    );
  }
}
