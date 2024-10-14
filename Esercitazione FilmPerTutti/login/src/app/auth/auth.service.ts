import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { iUser } from '../models/user';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { iAuthResponse } from '../models/auth-response';
import { iAuthData } from '../models/auth-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper: JwtHelperService = new JwtHelperService();

  authSubject = new BehaviorSubject<null|iUser>(null);
  syncIsLoggedIn:boolean = false;
  user$ = this.authSubject.asObservable()

  isLoggedIn$ = this.user$.pipe(
    map(user => !!user),
    tap(user => this.syncIsLoggedIn = user))


  constructor(
    private http:HttpClient,
    private router:Router
  ) {
    this.restoreUser()
  }


   loginUrl:string = 'http://localhost:3000/login'
  registerUrl:string = 'http://localhost:3000/register'

  register(newUser:Partial<iUser>):Observable<iAuthResponse>{
    return this.http.post<iAuthResponse>(this.registerUrl,newUser)
  }


  login(authData:iAuthData):Observable<iAuthResponse>{
    return this.http.post<iAuthResponse>(this.loginUrl, authData)
    .pipe(tap(data=>{

      this.authSubject.next(data.user)
      localStorage.setItem('accessData',JSON.stringify(data))

      this.autoLogout()
    }))
  }

  logout():void{
    this.authSubject.next(null)//Invio un dato null al subject.
    localStorage.removeItem('accessData')//Rimuovo i dati dell'utente dal local storage.
    this.router.navigate(['/auth/login'])//Sposto l'utente alla pagina di login

  }

  autoLogout():void{
    const accessData = this.getAccessData()

    if(!accessData) return
    const expDate = this.jwtHelper.getTokenExpirationDate(accessData.accessToken) as Date
    const expMs = expDate.getTime() - new Date().getTime()
    setTimeout(this.logout,expMs)

  }

  getAccessData():iAuthResponse|null{
    const accessDataJson = localStorage.getItem('accessData')//recupero io dati di accesso
    if(!accessDataJson) return null //se l'utente non si è loggato i dati non ci sono, quindi blocca tutto
    const accessData:iAuthResponse = JSON.parse(accessDataJson)
    return accessData;
  }


  restoreUser():void{
    const accessData = this.getAccessData()//Recupera i dati di accesso.

    if(!accessData) return//Se i dati di accesso non ci sono, significa che l'utente non è loggato, quindi blocca la funzione
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return//ora controllo se il token è scaduto, se lo è fermiamo la funzione
    this.authSubject.next(accessData.user)//Se questa riga viene Letta, vuol dire che l'utente è loggato, quindi recupero i dati dell'utente e li comunico al subject per ripristinare il login
    this.autoLogout()//Avvio il timer per l'auto logout in modo che l'u


}}
