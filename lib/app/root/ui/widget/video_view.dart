import 'package:flutter/material.dart';
import 'package:flutter_20250209/app/common/ui/edge_insets.dart';
import 'package:youtube_player_iframe/youtube_player_iframe.dart';

class VideoView extends StatefulWidget {
  const VideoView({super.key});

  @override
  State<VideoView> createState() => _VideoViewState();
}

class _VideoViewState extends State<VideoView> {
  final _controller = YoutubePlayerController();

  @override
  void initState() {
    super.initState();
    _controller.loadVideoById(videoId: "2fMb7zYrEq8");
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: edgeInsets(horizontal: 20, top: 20),
      child: YoutubePlayer(
        controller: _controller,
        aspectRatio: 16 / 9,
      ),
    );
  }
}
