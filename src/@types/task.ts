export type Task = {
  id: string;
  title: string;
  startsAt: string;
  endsAt: string;
  time: string;
  isCompleted?: boolean;
  notificationId?: string;
};
