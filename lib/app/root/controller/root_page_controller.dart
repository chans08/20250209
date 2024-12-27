import 'package:flutter_20250209/app/common/config/r.dart';
import 'package:flutter_20250209/app/root/data/transfer_info_data.dart';
import 'package:get/get.dart';

class RootPageController extends GetxController {
  static RootPageController get to => Get.find();

  final galleryList = [
    R.image.daesunminhee1,
    R.image.daesunminhee2,
    R.image.daesunminhee3,
    R.image.daesunminhee4,
    R.image.daesunminhee5,
    R.image.daesunminhee6,
    R.image.daesunminhee7,
    R.image.daesunminhee8,
    R.image.daesunminhee9,
    R.image.daesunminhee10,
    R.image.daesunminhee11,
    R.image.daesunminhee12,
    R.image.daesunminhee13,
    R.image.daesunminhee14,
    R.image.daesunminhee15,
  ];

  final daesunTransferData = FamilyTransferInfoData(
      '신랑 측 마음 전하는 곳',
      TransferInfoData('김대순', '국민은행', '758602-00-073684'),
      TransferInfoData('김종희', '농협은행', '1109-02-044588'),
      TransferInfoData('민연심', '농협은행', '1109-12-090827'),
  );

  final minheeTransferData = FamilyTransferInfoData(
    '신부 측 마음 전하는 곳',
    TransferInfoData('차민희', '카카오뱅크', '3333-05-1414209'),
    TransferInfoData('차성은', '농협은행', '665-02-064498'),
    TransferInfoData('이 호', '국민은행', '735702-01-001621'),
  );
}
