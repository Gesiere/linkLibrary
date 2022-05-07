import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { CRUD, ListDataBrokerLoadOneOptions, ListDataBrokerLoadOptions, ListDataBrokerResult, TOAST_OPTIONS } from 'app-base-lib';
import { ImplUsersDataBroker, UsersDataBrokerConfig,USER, UsersDataBrokerEvent,SEARCH_CONSTRAINT, SEARCH_FILTER, USER_FIND_PROP} from 'ionic-ng-users-ui';
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

  constructor( toastCtrl:ToastController, loadingCtrl:LoadingController) {
    super(toastCtrl as any,loadingCtrl as any,{perPage:PER_PAGE,append:false},'id');
  }

private getUsersFromFakeServer(){


const USERS:USER[] = [

  {
    id:1,
        name: "Gesiere Tarasele",
        username: 'queen gesu',
        email:"m@gmail.com",
        avatar:{
          url:"https://randomuser.me/api/portraits/women/25.jpg"
        }
    
    },
      {
        id:2,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:3,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:4,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:2,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:5,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:6,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:7,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:8,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:9,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:9,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:10,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:9,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:11,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:12,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:9,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:13,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:14,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:9,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:15,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:9,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:16,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:9,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:9,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:17,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:18,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:9,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:9,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:19,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:9,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:9,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:20,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:9,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:21,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
        }
    
      },
      {
        id:22,
        name: "Racheal okechukwu",
        email:"u@gmail.com",
        username: "gesi gesu",
        avatar: {
          url: "https://randomuser.me/api/portraits/women/20.jpg"
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
            buttonText: "Pick User",
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

    const filterSlugs = Array.isArray(searchConstraint.filterSlugs) ? searchConstraint.filterSlugs : [] ;

    return {
      data: await this.findByProps( searchConstraint.token , filterSlugs.map( slug => slug == 'name-s' ? 'name' : slug == 'email-s' ? 'email' : 'username' ) , 
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
