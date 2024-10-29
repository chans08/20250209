import 'package:flutter/material.dart';
import 'package:flutter_20250209/app/common/config/r.dart';
import 'package:flutter_20250209/app/common/ui/edge_insets.dart';

class CalendarView extends StatelessWidget {
  const CalendarView({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: edgeInsets(horizontal: 20, top: 50, bottom: 30),
      alignment: Alignment.center,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            '이월의\n아홉번째 날.',
            style: textStyleBold(R.color.color_594E47, 20),
          ),
          const SizedBox(height: 20),
          Container(
            width: double.infinity,
            height: 2,
            color: R.color.color_594E47,
          ),
          const SizedBox(height: 20),
          Row(
            children: [
              _dayView('일', textColor: R.color.color_D93A2B),
              _dayView('월'),
              _dayView('화'),
              _dayView('수'),
              _dayView('목'),
              _dayView('금'),
              _dayView('토', textColor: R.color.color_F29727),
            ],
          ),
          const SizedBox(height: 10),
          Row(
            children: [
              _dateView(' '),
              _dateView(' '),
              _dateView(' '),
              _dateView(' '),
              _dateView(' '),
              _dateView(' '),
              _dateView('1'),
            ],
          ),
          const SizedBox(height: 10),
          Row(
            children: [
              _dateView('2'),
              _dateView('3'),
              _dateView('4'),
              _dateView('5'),
              _dateView('6'),
              _dateView('7'),
              _dateView('8'),
            ],
          ),
          const SizedBox(height: 10),
          Row(
            children: [
              _dateView('9', isSelect: true),
              _dateView('10'),
              _dateView('11'),
              _dateView('12'),
              _dateView('13'),
              _dateView('14'),
              _dateView('15'),
            ],
          ),
          const SizedBox(height: 10),
          Row(
            children: [
              _dateView('16'),
              _dateView('17'),
              _dateView('18'),
              _dateView('19'),
              _dateView('20'),
              _dateView('21'),
              _dateView('22'),
            ],
          ),
          const SizedBox(height: 10),
          Row(
            children: [
              _dateView('23'),
              _dateView('24'),
              _dateView('25'),
              _dateView('26'),
              _dateView('27'),
              _dateView('28'),
              _dateView(' '),
            ],
          ),
          const SizedBox(height: 20),
          Container(
            width: double.infinity,
            height: 2,
            color: R.color.color_594E47,
          ),
          const SizedBox(height: 20),
        ],
      )
    );
  }

  Widget _dayView(String day, {Color? textColor}) {
    return Expanded(
      child: Center(
        child: Text(
          day,
          style: textStyle600(textColor ?? R.color.color_594E47, 18),
        ),
      ),
    );
  }

  Widget _dateView(String day, {bool isSelect = false}) {
    return Expanded(
      child: Container(
        width: 20,
        alignment: Alignment.center,
        decoration: isSelect ? BoxDecoration(
            color: R.color.color_F29727,
            shape: BoxShape.circle
        ) : null,
        child: Text(
          day,
          style: textStyle600(isSelect? R.color.white : R.color.color_594E47, 18),
          textAlign: TextAlign.center,
        ),
      ),
    );
  }
}
