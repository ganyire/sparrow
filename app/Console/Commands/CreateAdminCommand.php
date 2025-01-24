<?php
namespace App\Console\Commands;

use App\Models\User;
use function Laravel\Prompts\password;
use function Laravel\Prompts\text;
use Illuminate\Console\Command;

class CreateAdminCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:admin';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create super admin';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name     = text('Enter full name', required: true);
        $email    = text('Enter email address', required: true);
        $password = password(label: 'Enter password', required: true);

        $this->line('Creating admin user...');

        $user = User::create([
            'name'     => $name,
            'email'    => $email,
            'password' => bcrypt($password),
        ]);

        $this->line('Admin user created successfully.');
    }
}
