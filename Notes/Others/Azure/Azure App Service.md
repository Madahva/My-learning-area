# Azure App Service

Azure App Service is a fully managed web application hosting platform. This is a platform as a service (PaaS) that enables you to build and host web applications in the programming language of your choice without managing infrastructure. 


---


## Continuous integration/deployment support

Azure Web App service provides comprehensive support for continuous integration and deployment (CI/CD).

Azure Web App service supports continuous integration and deployment by integrating with popular source control systems, providing build and deployment pipelines, supporting deployment slots for staging and testing, offering the Deployment Center for streamlined setup, and enabling automated deployments triggered by repository events. This allows for seamless integration and automation of the build, test, and deployment processes for web applications.


---


## Built-in autoscale support (automatic scale-out based on real-world load)

The ability to scale up/down or scale out is baked into the web app. Depending on the web app's usage, you can scale your app up/down by increasing/decreasing the resources of the underlying machine that is hosting your web app. Resources can be number of cores or the amount of RAM available.

Scaling out, on the other hand, is the ability to increase the number of machine instances that are running your web app.


---


# Deploy and run a containerized web app with Azure App Service

You can use Azure Container Registry to hold Docker images, and you can construct web apps based on these images. By using a webhook, you can configure continuous deployment for a web app. This process monitors the image for the web app in Container Registry and causes the web app to be redeployed automatically if the image changes.

First you need to upload the image for the web app to Azure Container Registry.

## Container Registry

Container Registry is an Azure service that you can use to create your own private Docker registries. Like Docker Hub, Container Registry is organized around repositories that contain one or more images. Container Registry also lets you automate tasks such as redeploying an app when an image is rebuilt.

Security is an important reason to choose Container Registry instead of Docker Hub because:

- You have much more control over who can see and use your images.
- You can sign images to increase trust and reduce the chances of an image becoming accidentally (or intentionally) corrupted or otherwise infected.
- All images stored in a container registry are encrypted at rest.

Working with images in Container Registry is like working with Docker Hub, but offers a few unique benefits:

- Container Registry runs in Azure. The registry can be replicated to store images near where they're likely to be deployed.
- Container Registry is highly scalable, providing enhanced throughput for Docker pulls that can span many nodes concurrently. The Premium SKU of Container Registry includes 500 GiB of storage.


## Webhook

Azure App Service supports continuous deployment using _webhooks_. A webhook is a service offered by Container Registry. Services and applications can subscribe to the webhook to receive notifications about updates to images in the registry. A web app that uses App Service can subscribe to a Container Registry webhook to receive notifications about updates to the image that contains the web app. When the image is updated and App Service receives a notification, your app automatically restarts the site and pulls the latest version of the image.

The **Container settings** page of an App Service resource in the Azure portal automates the setup of continuous integration. If you turn on **Continuous Deployment**, App Service configures a webhook in your container registry to notify an App Service endpoint. Notifications from the registry that reach this endpoint cause your app to restart and pull the latest version of the container image.


## Container Registry tasks feature

You use the _tasks_ feature of Container Registry to rebuild your image whenever its source code changes automatically. You configure a Container Registry task to monitor the GitHub repository that contains your code and trigger a build each time it changes. If the build finishes successfully, Container Registry can store the image in the repository. If your web app is set up for continuous integration in App Service, it receives a notification via the webhook and updates the app.

**You must create Container Registry tasks from the command line.**

The following command shows how to create a task called _buildwebapp_. The task monitors the GitHub repository for the sample web app this module uses. Each time a change is committed, the task builds the `webimage` Docker image from the source code in GitHub and stores it to your registry in Container Registry. Before running this command, you need to create a GitHub personal access token with permissions to create a webhook in your repository. For private repositories, the token will also need full repository read permissions.

``` bash
az acr task create --registry <container_registry_name> --name buildwebapp --image webimage --context https://github.com/MicrosoftDocs/mslearn-deploy-run-container-app-service.git --file Dockerfile --git-access-token <access_token>
```


[Useful tutorial](https://learn.microsoft.com/en-gb/training/modules/deploy-run-container-app-service/)
