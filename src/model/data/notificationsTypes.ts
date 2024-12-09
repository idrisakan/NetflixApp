interface Notification {
  id:string;
  title: string;
  time: string;
  pat: string;
  description: string;
  read:boolean
  docs:string
}
interface NotificationsTypes {
  notifications: Notification[];
  pending: boolean;
}

export type {NotificationsTypes, Notification};
