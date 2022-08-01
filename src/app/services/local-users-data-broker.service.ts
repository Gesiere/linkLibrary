import { Injectable } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, ToastController } from '@ionic/angular';
import { CRUD, ListDataBrokerLoadOneOptions, ListDataBrokerLoadOptions, ListDataBrokerResult, TOAST_OPTIONS } from 'app-base-lib';
import { ImplUsersDataBroker, UsersDataBrokerConfig, USER, UsersDataBrokerEvent, USER_FIND_PROP, USERLIST_BUTTON } from 'ionic-ng-users-ui';
import {SEARCH_CONSTRAINT, SEARCH_FILTER} from 'ionic-ng-search-ui'
import { timer } from 'rxjs';
import {map, mapTo,take} from 'rxjs/operators';


const PER_PAGE = 10;

@Injectable({
  providedIn: 'root'
})
export class LocalUsersDataBrokerService extends ImplUsersDataBroker {
  filterRequired = false
  searchFilters: SEARCH_FILTER[] =   [
    {
      label: 'name',
      slug: 'name-s'
    },
    {
      label: 'email',
      slug: 'email-s',
    },
    {
      label: 'username',
      slug: 'username-s'
    }
  ]

  constructor( actionSheetController: ActionSheetController, toastCtrl: ToastController, alertCtrl: AlertController, loadingCtrl: LoadingController) {
    super(actionSheetController as any,toastCtrl as any, alertCtrl as any,loadingCtrl as any,{perPage:PER_PAGE,append:false});
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

private getUsersFromFakeServer(){


const USERS:USER[] = [

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
  return timer( 3000 ).pipe(take(1),mapTo(USERS));
}

  getConfig(): UsersDataBrokerConfig {
    return {
      pagination:{
        perPage:PER_PAGE,
      },
      ui: {
        general: {

          pagination:{
            enabled:true,
          },
          swipeRefresh:{
            enabled:false,
          },
          spinner: {
            type: 'bubbles'
          }
        },
        pages: {
          userSearchPage: {
            title:{
              label: 'Users Search Page'
            },
            placeholder: 'Search',
            button:this.button,
            searchFilters: this.searchFilters,
            userProps:['name','email','username'],
            filterEnabled: true,
            debounceCountTrigger: 2000,
            filterRequired:true,
            infiniteScrollEnabled: true
          },

          userDetailsPage: {
            title:{
              label:'User Details Page'
            },
            buttonsVisible: true,
            confirmBtn: 'Comfirm Please',
            backBtn:' Go Back',
            userProps:['name','email', 'username'],
           
          },

          userPickListPage : {
            title: {
              label: "User Lists Page"
            },
            button : this.button,
            userProps:['name','email', 'username']

          }
        }
      }
    }
  }
  
  async onCRUD(crudType: CRUD, user?: USER): Promise<USER>{
    return user;
  }

  async on(ev: UsersDataBrokerEvent): Promise<any>{
  }

  async isPaginationEnabled(): Promise<boolean> {
    return true;
  }
  async isRefreshEnabled(): Promise<boolean> {
    return true;
  }

  async canCRUD(crudType: CRUD): Promise<boolean>{
    return true;
  }

  /**
   * @param options the options that can be used to fetch the data
   * @returns an object that contains the data
   */
  async fetchOne(options: ListDataBrokerLoadOneOptions): Promise<ListDataBrokerResult<USER>>{

    return this.getUsersFromFakeServer().pipe(map((users:USER[]) => ({
      data:users.find( user => user.id === options.id )
    }) )).toPromise();
  }
  /**
   * @param options the options that can be used to fetch the data
   * @returns an object that contains the array of data
   */
  async fetch(options: ListDataBrokerLoadOptions<SEARCH_CONSTRAINT>): Promise<ListDataBrokerResult<USER[]>>{

    const searchConstraint = options.search?.constraint;

    if(!searchConstraint){
      return { data : await this.getUsersFromFakeServer().toPromise() };
    }

    const filterSlugs = Array.isArray(searchConstraint?.filterSlugs) ? searchConstraint.filterSlugs : [] ;

    return {
      data: await this.findByProps( searchConstraint?.token , filterSlugs.map( slug => slug == 'name-s' ? 'name' : slug == 'email-s' ? 'email' : 'username' ) , 
        options.page , options.perPage )
    };

  }

  async findByProps( token:string , userProps:USER_FIND_PROP[] , page:number , perPage:number ){

    return this.getUsersFromFakeServer().pipe(map((users:USER[]) => users.filter( (user)=>{
        userProps = userProps.length > 0 ? userProps : ['name'] ;

        return userProps.reduce( (s,v)=>{
          return s || (user[v] as string).toLowerCase().includes( token.toLowerCase() );
        } , false );
      } ).slice( ( page - 1 ) * perPage , page * perPage )
    )).toPromise();
  }

}
