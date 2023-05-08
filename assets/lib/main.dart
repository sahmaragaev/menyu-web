import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';
import 'package:menyu_az/constants/repo_strings.dart';
import 'package:menyu_az/data/helpers/helper.dart';
import 'package:menyu_az/data/helpers/platform_details.dart';
import 'package:menyu_az/presentation/welcome/splash_screen.dart';

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();
  String? param;
  if (PlatformDetails().isWeb) {
    // FirebaseOptions options = const FirebaseOptions(
    //   apiKey: 'AIzaSyCW5KMcg6p7m4oAYyEyZ2rAFiahWfb0VpA',
    //   appId: '1:1036866262819:web:dfcc839bbf04756d081e96',
    //   messagingSenderId: '1036866262819',
    //   projectId: 'menyuaz-b9af1',
    // );
    // await Firebase.initializeApp(options: options);
    param = Uri.base.queryParameters["id"];
  }
  SystemChrome.setSystemUIOverlayStyle(
    const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      //systemNavigationBarColor: AppColors.primary,
    ),
  );
  
  await Helper.setPrefs();
  runApp(App(param: param));
}

class App extends StatefulWidget {
  const App({super.key, this.param});
  final String? param;

  @override
  State<App> createState() => _AppState();
}

class _AppState extends State<App> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.yellow,
      ),
      builder: EasyLoading.init(),
      home: SplashScreen(param: widget.param),
    );
  }
}
