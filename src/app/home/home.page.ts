import { Component, Inject, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { ConfirmableUserInputComponent as ConfirmableUserInputComponent, COMFIRMABLE_INPUT_FIND_FUNCTION, CONFIRMABLE_INPUT_SHOW_PROGRESS_FUNCTION, ImplUsersDataBroker, USER, UsersDataBroker, UsersDataBrokerServiceToken, UserSearchPageComponent, USER_FIND_PROP } from 'ionic-ng-users-ui';
import { IonListDataBroker } from 'vicky-ionic-ng-lib';
import { LocalUsersDataBrokerService } from '../services/local-users-data-broker.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  searchValue: any;
  ive = [
    {
      id: 1,
      name: 'Gesiere Tarasele',
      username: 'queen gesu',
      email: 'm@gmail.com',
      avatar: {
        url: 'https://randomuser.me/api/portraits/women/25.jpg',
      },
    },
    {
      id: 2,
      name: 'Racheal okechukwu',
      email: 'u@gmail.com',
      username: 'gesi gesu',
      avatar: {
        url: 'https://randomuser.me/api/portraits/women/20.jpg',
      },
    },
  ];

  keys = ['name', 'address', 'email', 'username'];

  // users: USER[] = [
  //   {
  //     name: "Gesiere Tarasele",
  //     username: 'queen gesu',
  //     address: "Nikton",
  //     email:"m@gmail.com",
  //     avatar:{
  //       url:"https://randomuser.me/api/portraits/women/25.jpg"
  //     }

  //   },
  //   {
  //     name: "Racheal okechukwu",
  //     address: "Nikton road",
  //     email:"u@gmail.com",
  //     username: "gesi gesu",
  //     avatar: {
  //       url: "https://randomuser.me/api/portraits/women/20.jpg"
  //     }

  //   }
  // ]

  filters = [
    { slug: 'name', label: 'School Name' },
    { slug: 'address', label: 'School Address' },
    { slug: 'motto', label: 'School motto' },
  ];

  @ViewChild(ConfirmableUserInputComponent, { static: false })
  confirmableUserInput: ConfirmableUserInputComponent;
  confirmableUserInputUserProp: USER_FIND_PROP = 'name';
  confirmableUserInputPlaceholder = `Enter the ${this.confirmableUserInputUserProp}`;
  confirmableUserInputShowProgress: CONFIRMABLE_INPUT_SHOW_PROGRESS_FUNCTION =
    async (message: string) => {
      return (
        this.usersDataBroker as unknown as IonListDataBroker<any, any, any, any>
      ).showProgressDialog({
        title: 'Progressing',
        message,
      });
    };

  constructor(
    @Inject(UsersDataBrokerServiceToken)
    private usersDataBroker: LocalUsersDataBrokerService,
    private modalController: ModalController
  ) {}

  confirmableInputFindFunction: COMFIRMABLE_INPUT_FIND_FUNCTION = async (
    userProp: USER_FIND_PROP,
    value: string
  ): Promise<USER> => {
    const users = await this.usersDataBroker.findByProps(
      value,
      [userProp],
      1,
      1
    );
    return users.length > 0 ? users[0] : null;
  };

  ngOnInit(): void {}

  async openModal() {
    const modal = await this.modalController.create({
      component: UserSearchPageComponent,
      componentProps: { value: 123 },
    });

    await modal.present();
  }
  executeConfirmableInput() {
    this.confirmableUserInput.confirm().then((result) => {
      console.log('executeonfirmableInput() : ', result);
      if (result.status == 'user-not-found') {
        alert('No user found');
      }
    });
  }
}
