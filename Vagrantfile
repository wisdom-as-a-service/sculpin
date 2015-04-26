IP = "192.168.33.11"

BOX_NAME = "project"
BOX_URL = "https://s3.amazonaws.com/provantagetech/vagrant/project.box"

Vagrant.configure("2") do |config|
    config.vm.box = BOX_NAME
    config.vm.box_url = BOX_URL
    config.vm.network :private_network, ip: IP
    config.vm.usable_port_range = (2200..2299)
    config.vm.synced_folder "./", "/var/www/project", id: "vagrant-root", :nfs => false, :mount_options => ["dmode=777", "fmode=666"]
    config.vm.provider :virtualbox do |virtualbox|
        virtualbox.customize ["modifyvm", :id, "--memory", "2048"]
    end
	config.ssh.username = "vagrant"
	config.ssh.shell = "bash -l"
	config.ssh.keep_alive = true
	config.ssh.forward_agent = false
	config.ssh.forward_x11 = false
	config.vagrant.host = :detect
end
