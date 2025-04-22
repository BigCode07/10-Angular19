import { Injectable, signal } from '@angular/core';

interface State {
  users: any[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  #state = signal<State>({
    loading: true,
    users: [],
  });

  constructor() {
    console.log('Cargando data');
  }
}
