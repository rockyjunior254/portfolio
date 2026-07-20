create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  company text,
  project_type text,
  budget text,
  subject text not null,
  message text not null,
  ip_address text not null,
  created_at timestamptz not null default now(),
  notification_status text not null default 'pending',
  email_delivered boolean default false,
  sms_delivered boolean default false
);

create index if not exists contact_messages_ip_created_at_idx on public.contact_messages (ip_address, created_at desc);
alter table public.contact_messages enable row level security;
