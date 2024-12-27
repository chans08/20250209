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
              '메종드아나하 B1 그랜드볼룸홀',
              style: textStyleBold(R.color.color_594E47, 19),
            ),
            Text(
              '2025년 2월 9일 일요일 오후 2시',
              style: textStyleBold(R.color.color_594E47, 17),
            ),
            const SizedBox(height: 30),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  '주차',
                  style: textStyleGothicBold(R.color.color_594E47, 17),
                ),
                const SizedBox(height: 4),
                Text(
                  '서울특별시 강남구 언주로 517 신라스테이 B2~B5 (2시간 무료주차)',
                  style: textStyleGothicNormal(R.color.color_594E47, 15),
                ),
                const SizedBox(height: 24),
                Text(
                  '지하철',
                  style: textStyleGothicBold(R.color.color_594E47, 17),
                ),
                const SizedBox(height: 4),
                Text(
                  '2호선 / 수인분당선 선릉역 6번출구에서 도보 10분\n(셔틀 버스 10분 간격 운행)',
                  style: textStyleGothicNormal(R.color.color_594E47, 15),
                ),
                const SizedBox(height: 24),
                Text(
                  '버스',
                  style: textStyleGothicBold(R.color.color_594E47, 17),
                ),
                const SizedBox(height: 4),
                Text(
                  '간선 141 , 242 , 361 , 지선 6411\n정류장 : KT강남지사',
                  style: textStyleGothicNormal(R.color.color_594E47, 15),
                ),
                const SizedBox(height: 24),
                Text(
                  '셔틀버스',
                  style: textStyleGothicBold(R.color.color_594E47, 17),
                ),
                const SizedBox(height: 4),
                Text(
                  '선릉역 6번출구 10분 간격 수시 운행',
                  style: textStyleGothicNormal(R.color.color_594E47, 15),
                ),
              ],
            )
          ],
        ));
  }
}
