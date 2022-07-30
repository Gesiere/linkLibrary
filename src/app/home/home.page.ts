import { Component, Inject, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ConfirmableUserInputComponent as ConfirmableUserInputComponent, COMFIRMABLE_INPUT_FIND_FUNCTION, CONFIRMABLE_INPUT_SHOW_PROGRESS_FUNCTION, ImplUsersDataBroker, USER, UsersDataBrokerServiceToken, UserSearchPageComponent, USER_FIND_PROP, USERLIST_BUTTON } from 'ionic-ng-users-ui';
import { IonListDataBroker } from 'vicky-ionic-ng-lib';
import { AVATAR, AVATAR_POSITION, AVATAR_SHAPE, AVATAR_STATUS_TYPE } from 'ionic-ng-pictures-ui'
import { LocalUsersDataBrokerService } from '../services/local-users-data-broker.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  searchValue: any;
  url = 'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600'
  avatars = [
    {
      url: 'https://randomuser.me/api/portraits/women/25.jpg',
      title: 'Racheal',
      // shape: AVATAR_SHAPE.CIRCLE,
    },
    {
      url: 'https://randomuser.me/api/portraits/women/20.jpg',
      title: 'Racheal',
      // shape: AVATAR_SHAPE.ROUNDED_RECT,
    },
    {
      url: 'https://randomuser.me/api/portraits/women/10.jpg',
      title: 'tracy',
      // shape: AVATAR_SHAPE.ROUNDED_RECT,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/17.jpg',
      title: 'homer',
      // shape: AVATAR_SHAPE.ROUNDED_RECT,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/20.jpg',
      title: 'blake',
      // shape: AVATAR_SHAPE.ROUNDED_RECT,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/4.jpg',
      title: 'carson',
      // shape: AVATAR_SHAPE.ROUNDED_RECT,
    },

  ];

  avatar:AVATAR = {
    url: "https://randomuser.me/api/portraits/women/13.jpg",
    title: 'Gloria',
    // shape: AVATAR_SHAPE.ROUNDED_RECT,
      status: {
        type: AVATAR_STATUS_TYPE.COLOR,
        statusPosition: AVATAR_POSITION.NE,
        statusShape: AVATAR_SHAPE.CIRCLE,
        statusUrl: "https://randomuser.me/api/portraits/men/25.jpg"
      }
  }

  button:USERLIST_BUTTON[] = [
    // {
    //   id:1,
    //   label:'delete',
    //   slug:'pick-slug',
    //   icon:'trash-outline'
    // },
    {
      id:2,
      label:'Share',
      slug:'pi',
      icon:'share-social-outline'
    }
  ]

  userProps = ['name','email', 'username']
  users:USER[] = [

    {
      id:1,
          name: "Gesiere Tarasele",
          username: 'queen gesu',
          email:"m@gmail.com",
          avatar:{
            url: "https://randomuser.me/api/portraits/women/25.jpg",
            title: 'name'
          }
      },
        {
          id:2,
          name: "Racheal okechukwu",
          email:"u@gmail.com",
          username: "gesi gesu",
          avatar: {
            url: "https://randomuser.me/api/portraits/women/2.jpg",
            title: 'name'
            
          }
      
        },
  ];

  

  getAvatar(avatar: AVATAR){
    console.log(avatar);
    
  }
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
    private modalController: ModalController,
    private navController: NavController
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


  onClick(){
    this.navController.navigateForward(['/user-list']);
    console.log('clicked');
    
  }
}
