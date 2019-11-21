import { TestBed, inject } from '@angular/core/testing';
import { AuthorizationService } from './authorization.service';
import { AuthUser, UserCredential } from '../../models/user';

describe('AuthorizationService', () => {

  let service: AuthorizationService;
  let userCred: UserCredential;

  const mockUser: AuthUser = {
    id: 'mockUserId',
    firstName: 'firstName',
    lastName: 'lastName',
    isAuth: false,
    email: '',
    password: '',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizationService]
    });
    service = TestBed.get(AuthorizationService);

    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);

    service.mockUser = mockUser;
    userCred = {
      email: 'email',
      password: 'string',
    };
  });

  it('should create the service',
    () => {
    expect(service).toBeTruthy();
  });

  it('should return is user Authenticated', () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });

  it('should store user in local storage', () => {

    const user: AuthUser = {
      ...mockUser,
      ...userCred,
      isAuth: !mockUser.isAuth,
    };

    service.logIn(userCred);
    expect(localStorage.getItem('mockUserId')).toEqual(JSON.stringify(user));
  });

  it('should return stored user from localStorage', () => {
    const user: AuthUser = {
      ...mockUser,
      ...userCred,
      isAuth: !mockUser.isAuth,
    };
    localStorage.setItem(mockUser.id, JSON.stringify(user));
    expect(service.getUserInfo()).toEqual(user);
  });

  it('should remove stored user from localStorage', () => {
    const user: AuthUser = {
      ...mockUser,
      ...userCred,
      isAuth: !mockUser.isAuth,
    };
    localStorage.setItem(mockUser.id, JSON.stringify(user));
    service.logOut();
    expect(localStorage.removeItem).toHaveBeenCalled();
  });



});
