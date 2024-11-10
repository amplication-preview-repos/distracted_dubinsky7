export type Notification = {
  createdAt: Date;
  id: string;
  isRead: boolean | null;
  message: string | null;
  updatedAt: Date;
};
