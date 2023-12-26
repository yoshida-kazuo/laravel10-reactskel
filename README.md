# laravel10-reactskel

php^8.3 node18.17.1  

* 権限周り: 一般ユーザ, 管理者, スーパーユーザ
  * Kernel: web: 権限に基づくroot template切り替え
    * src\app\Http\Middleware\InteriaRole.php
  * Kernel: aliases: auth.role:user, auth.role:admin, auth.role:root
    * src\app\Http\Middleware\AuthenticateRole.php
* クエリパラメータトークンによるBearer付与（セキュリティ上好ましく無いので使わない）
  * Kernel: aliases: auth.token
    * src\app\Http\Middleware\AuthenticateToken.php
* 表示日時タイムゾーン調整（envでデフォルト定義 `APP_VIEW_TIMEZONE_DEFAULT="Asia/Tokyo"`）
  * src\app\Models\Trait\Timezone.php
  * src\app\Lib\Timezone.php

## インストール
```
composer install
```

### env設定
```
cp .env.example .env
php artisan key:generate
```

### マイグレーション実行
```
php artisan migrate --path=database/migrations/initialize 
```

### Vite実行
```
npm install
npm run dev
```

### ユーザ
追加  
権限  一般ユーザ:90, 管理者:60, スーパーユーザ:30  

```
php artisan user:create test@example.jp password -N '試験ユーザ' -R 30

php artisan user:create --help
Description:
  ユーザ追加

Usage:
  user:create [options] [--] <email> <password>

Arguments:
  email                    追加ユーザのメールアドレスをセットしてください
  password                 パスワードは8文字以上でセットしてください

Options:
  -N, --name[=NAME]        省略した場合emailがセットされます
  -R, --role-id[=ROLE-ID]  省略した場合90がセットされます
```

更新  
```
php artisan user:update --help
Description:
  ユーザ更新

Usage:
  user:update [options] [--] <email>

Arguments:
  email                      対象ユーザのメールアドレスをセットしてください

Options:
  -P, --password[=PASSWORD]  新パスワードをセットしてください
  -N, --name[=NAME]          新ユーザ名をセットしてください
      --restore[=RESTORE]    ソフト削除したユーザを元へ戻す default no [default: "no"]
```

削除  
```
php artisan user:delete --help
Description:
  ユーザ削除

Usage:
  user:delete <email>

Arguments:
  email                 削除対象メールアドレスをセットしてください
```
