import 'package:flutter/material.dart';
import 'package:flutter_20250209/app/common/ui/edge_insets.dart';
import 'package:flutter_20250209/app/common/ui/title_view.dart';
import 'package:flutter_20250209/app/root/controller/root_page_controller.dart';
import 'package:flutter_20250209/app/root/ui/dialog/image_detail_dialog.dart';

class GalleryView extends StatelessWidget {
  const GalleryView({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: edgeInsets(horizontal: 20, top: 50, bottom: 30),
      child: Column(
        children: [
          const TitleView('GALLERY'),
          const SizedBox(height: 30),
          GridView.builder(
              physics: const ClampingScrollPhysics(),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 3,
              ),
              itemCount: RootPageController.to.galleryList.length,
              shrinkWrap: true,
              itemBuilder: (BuildContext context, int index) {
                return GestureDetector(
                  onTap: () {
                    showImageDetailDialog(index);
                  },
                  child: Container(
                    padding: edgeInsets(vertical: 2),
                    child: RootPageController.to.galleryList[index].image(),
                  ),
                );
              }
          )
        ],
      )
    );
  }
}
