export type  NotificationType = 'success' | 'info' | 'warning' | 'error';

export interface INotificationProps {
    title?: NotificationType;
    message?: string | null;
}   

export interface NotificationStyles{
    account:React.CSSProperties,
    icon: React.CSSProperties
}

export interface TopBarStyles {
    breadcrumb: React.CSSProperties,
    container: React.CSSProperties,
}