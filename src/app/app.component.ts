import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { indexedDBLocalPersistence, initializeAuth } from 'firebase/auth';
// import {
// 	ActionPerformed,
// 	PushNotificationSchema,
// 	PushNotifications,
// 	Token,
	
// } from '@capacitor/push-notifications';
import { FCM } from "@capacitor-community/fcm";

import { Capacitor } from '@capacitor/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';
import { SplashComponent } from './splash/splash.component';

// const isPushNotificationsAvailable = Capacitor.isPluginAvailable('PushNotifications');

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

	body: string = ""
	listData:any = []
	notif:any
	tokens=[]
	constructor(private modalController:ModalController) {
		const app = initializeApp(environment.firebaseConfig);
		if (Capacitor.isNativePlatform) {
			initializeAuth(app, {
			persistence: indexedDBLocalPersistence
			});
		}
	
		console.log("constructor1")
		this.presentSplash()
		
	}

	async presentSplash() {
		const modal = await this.modalController.create({
		  component: SplashComponent,
		  cssClass: 'my-custom-class'
		});
		return await modal.present();
	  }

	ngOnInit() {
		// if (isPushNotificationsAvailable) {
		// 	console.log('Initializing HomePage');

		// 	// PushNotifications.register()
		// 	// .then(() => {
		// 	// 	return FCM.subscribeTo({ topic: 'all' });
		// 	// })

		// 	PushNotifications.requestPermissions().then(result => {
		// 		if (result.receive === 'granted') {
		// 			// Register with Apple / Google to receive push via APNS/FCM
		// 			PushNotifications.register();
		// 		} else {
		// 			// Show some error
		// 		}
		// 	});

		// 	PushNotifications.addListener('registration', (token: Token) => {
		// 		return FCM.subscribeTo({ topic: 'all' });
		// 	});

		// 	PushNotifications.addListener('registrationError', (error: any) => {
		// 		alert('Error on registration: ' + JSON.stringify(error));
		// 	});

		// 	PushNotifications.addListener(
		// 		'pushNotificationReceived',
		// 		(notification: PushNotificationSchema) => {
		// 			alert('notification reçue ' + JSON.stringify(notification.body));
		// 		}
		// 	);

		// 	PushNotifications.addListener(
		// 		'pushNotificationActionPerformed',
		// 		async (notification:ActionPerformed) => {
		// 		}
		// 	);
		// }
	}
}
