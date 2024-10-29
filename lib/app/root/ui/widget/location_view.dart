import 'dart:html';

import 'package:flutter/material.dart';
import 'package:flutter_20250209/app/common/config/r.dart';
import 'package:flutter_20250209/app/common/ui/edge_insets.dart';
import 'package:flutter_20250209/app/common/ui/title_view.dart';
import 'package:url_launcher/url_launcher.dart';

class LocationView extends StatelessWidget {
  const LocationView({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: edgeInsets(horizontal: 20, top: 50, bottom: 30),
        width: double.infinity,
        child: Column(
          children: [
            const TitleView('LOCATION'),
            const SizedBox(height: 10),
            GestureDetector(
              onTap: () async {
                String userAgent = window.navigator.userAgent.toLowerCase();
                if (userAgent.contains('android') || userAgent.contains('iphone')) {
                  Uri url = Uri.parse('kakaomap://place?id=403816747');
                  launchUrl(url);
                } else {
                  Uri url = Uri.parse('https://m.map.kakao.com/actions/detailMapView?id=403816747');
                  launchUrl(url);
                }
              },
              child: ClipRRect(
                  borderRadius: BorderRadius.circular(16),
                  child: R.image.map.image(
                    width: 300,
                    height: 250,
                    fit: BoxFit.cover
                  )),
            ),
            const SizedBox(height: 8),
            Text(
              '지도를 클릭하시면 카카오 맵으로 연결됩니다.',
              style: textStyleNormal(R.color.color_594E47, 15),
            ),
            const SizedBox(height: 30),
            Text(
              '25년 2월 9일 일요일 오후 2시',
              style: textStyleBold(R.color.color_594E47, 17),
            ),
            Text(
              '메종 드 아나하 L층 (지하 1층)',
              style: textStyleBold(R.color.color_594E47, 17),
            ),
            const SizedBox(height: 30),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  '자가용',
                  style: textStyleBold(R.color.color_594E47, 17),
                ),
                const SizedBox(height: 4),
                Text(
                  '서울특별시 강남구 언주로 517 L층\n메종드아나하(웨딩홀 지하주차장 이용시 2시간 무료주차)',
                  style: textStyleNormal(R.color.color_594E47, 15),
                ),
                const SizedBox(height: 24),
                Text(
                  '지하철',
                  style: textStyleBold(R.color.color_594E47, 17),
                ),
                const SizedBox(height: 4),
                Text(
                  '선릉역(2호선, 수인분당선) 6번 출구 방향으로 나와\n셔틀 버스를 타고 도착한 건물\n메종드아나하 L층 (지하 1층)',
                  style: textStyleNormal(R.color.color_594E47, 15),
                ),
                const SizedBox(height: 24),
                Text(
                  '버스',
                  style: textStyleBold(R.color.color_594E47, 17),
                ),
                const SizedBox(height: 4),
                Text(
                  '건물 편\n간선 : 141, 242, 361\nKT강남지사 정류소 하차. \n메종드아나하 L층 (지하 1층)\n\n건물 맞은편\n간선 : 141, 242, 361 / 지선 : 6411\nKT강남지사 정류소 하차 후 왼쪽 횡단보도 건너서 도착한 건물\n 메종드아나하 L층 (지하 1층)',
                  style: textStyleNormal(R.color.color_594E47, 15),
                ),
              ],
            )
          ],
        ));
  }
}
