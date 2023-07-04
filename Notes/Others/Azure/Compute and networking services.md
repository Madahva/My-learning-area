# Compute and networking services

Compute and networking services are fundamental components of the Azure cloud platform, providing the foundation for deploying and managing applications, virtual machines, and networking resources.



## Compute Services

Compute services in Azure provide the capability to create, manage, and scale virtual machines and serverless applications in the cloud. These services offer a flexible and scalable infrastructure for running various workloads, from simple web applications to complex enterprise systems.



### Virtual machines

With Azure Virtual Machines (VMs), you can create and use VMs in the cloud. VMs provide infrastructure as a service (IaaS) in the form of a virtualized server and can be used in many ways. Just like a physical computer, you can customize all of the software running on your VM. VMs are an ideal choice when you need:

- Total control over the operating system (OS).
- The ability to run custom software.
- To use custom hosting configurations.

An Azure VM gives you the flexibility of virtualization without having to buy and maintain the physical hardware that runs the VM. However, as an IaaS offering, you still need to configure, update, and maintain the software that runs on the VM.

To create an Azure virtual machine (VM) and install Nginx, a popular web server, you can use the Azure portal, the Azure CLI, Azure PowerShell, or an Azure Resource Manager (ARM) template.


### Containers

Azure Containers is a service provided by Microsoft Azure that enables the deployment and management of containerized applications in the cloud. Containers are lightweight, isolated, and portable environments that package applications and their dependencies, allowing for consistent deployment and efficient scaling.

Azure Containers supports popular containerization technologies like Docker, allowing developers to build, package, and deploy applications as containers.

Using Azure Containers, developers can package their applications and dependencies into containers, making it easier to maintain consistency across different environments and scale applications as needed. The flexibility and portability of containers enable efficient resource utilization and faster application deployment. With Azure's container services, developers can choose the appropriate level of control and management based on their specific requirements, whether it's serverless container instances or a fully managed Kubernetes environment.



### Azure functions

Azure Functions is a serverless compute service provided by Microsoft Azure. It allows developers to build and deploy event-driven, scalable, and serverless applications in the cloud. With Azure Functions, developers can focus on writing the code for specific functions or tasks without worrying about managing the underlying infrastructure.

Key features and benefits of Azure Functions include:

1. Serverless architecture: Azure Functions abstracts away the infrastructure management, allowing developers to focus solely on writing the code for their functions. It automatically scales the execution of functions based on demand, reducing the need for capacity planning and resource management.

2. Event-driven execution: Functions in Azure Functions are triggered by events, such as HTTP requests, timer triggers, database updates, or messages from message queues. This event-driven model allows developers to respond to events and execute functions as needed.

3. Broad language support: Azure Functions supports multiple programming languages, including C#, JavaScript, Python, PowerShell, and TypeScript. This flexibility allows developers to choose the language they are most comfortable with.

4. Integration with other Azure services: Azure Functions seamlessly integrates with other Azure services, such as Azure Storage, Azure Cosmos DB, Azure Event Hubs, and more. This enables developers to easily build complex workflows and leverage the power of Azure services within their functions.

5. Pay-as-you-go pricing: Azure Functions follows a consumption-based pricing model, where you only pay for the actual execution time and resources consumed by your functions. This makes it cost-effective, as you don't have to pay for idle resources.

6. Developer productivity: Azure Functions provides development tools, such as Visual Studio, Visual Studio Code, and Azure Functions Core Tools, which offer a rich development experience. It supports local debugging, testing, and deployment, streamlining the development lifecycle.

7. Monitoring and diagnostics: Azure Functions offers built-in logging and monitoring capabilities, allowing developers to monitor the execution and performance of their functions. It integrates with Azure Application Insights for detailed insights into function behavior and performance.

With Azure Functions, developers can create a wide range of applications and workflows, from simple single-function applications to complex serverless architectures. It provides a flexible and scalable platform for building event-driven solutions and allows developers to focus on writing code that directly solves their business problems.

In summary, Azure Functions is a serverless compute service that enables developers to build event-driven applications without worrying about infrastructure management. It offers flexibility, scalability, and integration capabilities, allowing developers to focus on writing code and delivering value quickly.



## Azure App Service (Host)

Azure App Service is a fully managed platform-as-a-service (PaaS) offering by Microsoft Azure that enables developers to build, deploy, and scale web applications, mobile app backends, and RESTful APIs. It provides a streamlined environment for hosting and managing applications without the need to manage underlying infrastructure.

Key features and benefits of Azure App Service include:

1. Multiple language and framework support: Azure App Service supports a wide range of programming languages, including .NET, Node.js, Java, Python, PHP, and Ruby. It also integrates with popular frameworks like ASP.NET, Express.js, Django, Flask, and more.

2. Scalability and high availability: App Service automatically scales your applications based on demand, allowing them to handle high traffic loads without manual intervention. It also provides built-in load balancing and auto-healing capabilities to ensure high availability of your applications.

3. Deployment options: You can deploy applications to Azure App Service using various methods, including Git, Azure DevOps, Visual Studio, Docker containers, and FTP. This provides flexibility in how you manage and deploy your applications.

4. DevOps integration: Azure App Service seamlessly integrates with Azure DevOps, allowing you to set up continuous integration and deployment (CI/CD) pipelines for automated application delivery. This enables faster release cycles and promotes collaboration between development and operations teams.

5. Easy integration with Azure services: App Service integrates with other Azure services, such as Azure SQL Database, Azure Cosmos DB, Azure Functions, Azure Storage, and more. This allows you to leverage additional capabilities and create robust, end-to-end solutions.

6. Security and compliance: Azure App Service provides built-in security features, including SSL/TLS encryption, authentication, authorization, and role-based access control. It also supports compliance with various industry standards and regulations.

7. Monitoring and diagnostics: App Service offers built-in logging, monitoring, and diagnostics features. You can access logs, set up alerts, and gain insights into the performance and behavior of your applications using Azure Application Insights or third-party monitoring solutions.




## The networking features

Networking services in Azure provide the foundation for connecting and securing your resources in the cloud. These services enable you to build and manage virtual networks, establish connectivity with on-premises networks, and implement network security measures.



### Azure virtual networks

Azure Virtual Networking is a service in Microsoft Azure that allows users to create and manage virtual networks (VNets) in the Azure cloud environment. It enables users to securely connect and isolate their resources deployed within Azure, providing features like virtual networks, subnets, network security groups, virtual network peering, virtual network gateway, and support for network virtual appliances. Azure Virtual Networking facilitates network management, security, and connectivity in the Azure cloud.


---


## Learning objectives

You should now be able to:

- Compare compute types, including container instances, virtual machines, and functions.
- Describe virtual machine options, including virtual machines (VMs), Virtual Machine Scale Sets, virtual machine availability sets, and Azure Virtual Desktop.
- Describe resources required for virtual machines.
- Describe application hosting options, including Azure Web Apps, containers, and virtual machines.
- Describe virtual networking, including the purpose of Azure Virtual Networks, Azure virtual subnets, peering, Azure DNS, VPN Gateway, and ExpressRoute.
- Define public and private endpoints.