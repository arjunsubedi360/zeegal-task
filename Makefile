include .env
PORTAL_VERSION = $(PORTAL_$(shell echo '$(service)' | tr '[:lower:]' '[:upper:]')_VERSION)
SERVICE_VERSION = $(SERVICE_$(shell echo '$(service)' | tr '[:lower:]' '[:upper:]')_VERSION)

deploy: pull build up
	echo "Service deployment completed"

# Git
clone:
	- cd services && git clone git@github.com:arjunsubedi360/service-$(service).git && cd service-$(service) && git checkout develop && cd ../..

pull:
	- cd services/service-$(service) && git checkout develop && git pull origin develop && cd ../..

# Docker
up:
	- docker-compose -f docker-compose.yml up -d service-$(service)

restart:
	- docker-compose -f docker-compose.yml restart service-$(service)

down:
	- docker-compose -f docker-compose.yml down

rm:
	- docker-compose rm -s -v service-$(service)

build:
	- docker build ./services/service-$(service)/ -t calilio-service-$(service):$(SERVICE_VERSION)

logs:
	- docker-compose logs -f --tail 100 service-$(service)

exec:
	- docker-compose -f docker-compose.yml exec service-$(service) bash
