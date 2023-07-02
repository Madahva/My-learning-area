# Cloud Computing

Cloud computing is the delivery of computing services over the internet. Computing services include common IT infrastructure such as virtual machines, storage, databases, and networking. Cloud services also expand the traditional IT offerings to include things like Internet of Things (IoT), machine learning (ML), and artificial intelligence (AI).

You typically pay only for the cloud services you use, which helps you:

- Plan and manage your operating costs.
- Run your infrastructure more efficiently.
- Scale as your business needs change.

To put it another way, cloud computing is a way to rent compute power and storage from someone else’s datacenter. You can treat cloud resources like you would resources in your own datacenter. However, unlike in your own datacenter, when you're done using cloud resources, you give them back. You’re billed only for what you use.

Instead of maintaining CPUs and storage in your datacenter, you rent them for the time that you need them. The cloud provider takes care of maintaining the underlying infrastructure for you. The cloud enables you to quickly solve your toughest business challenges and bring cutting-edge solutions to your users.



## The shared responsibility model

The shared responsibility model is a concept commonly used in cloud computing to define the division of responsibilities between cloud service providers and their customers (users or organizations) regarding security and management of the cloud environment. It clarifies the areas where the provider and the customer are responsible, ensuring a clear understanding of their respective roles.


***You’ll always be responsible for:***

- The information and data stored in the cloud
- Devices that are allowed to connect to your cloud (cell phones, computers, and so on)
- The accounts and identities of the people, services, and devices within your organization

***The cloud provider is always responsible for:***

- The physical datacenter
- The physical network
- The physical hosts

***Your service model will determine responsibility for things like:***

- Operating systems
- Network controls
- Applications
- Identity and infrastructure



## Cloud Models

The cloud models define the deployment type of cloud resources. The fourth main cloud models are: private, public, hybrid and multi-cloud.


### **Private Cloud**

**Private cloud refers to a cloud infrastructure that is exclusively used by a single organization.** 

It can be physically located on-premises within the organization's data center or hosted by a third-party provider. Private cloud offers more control, security, and customization options compared to public cloud but requires dedicated resources and infrastructure management.



### Public cloud

**In this model, cloud services are provided by a third-party cloud service provider and made available to the general public over the internet.** 

The infrastructure, platforms, and applications are shared among multiple users or organizations. Examples of public cloud providers include Microsoft Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP).



### Hybrid cloud

**A hybrid cloud is a computing environment that uses both public and private clouds in an inter-connected environment.** 

Hybrid cloud can be used to provide an extra layer of security. For example, users can flexibly choose which services to keep in public cloud and which to deploy to their private cloud infrastructure.



### Multi-Cloud 

**Multi-cloud refers to the use of multiple cloud service providers to meet different requirements or leverage specific services**. 

Organizations may choose to use different cloud providers for different applications or services based on factors like cost, performance, geographic presence, or feature availability. Multi-cloud deployments help prevent vendor lock-in and offer flexibility and redundancy.



---



## Benefits of using a Cloud Platform

When building or deploying a cloud application, several key considerations need to be taken into account to ensure its success. These considerations include:

1. **Availability**: High availability refers to the ability of an application or service to remain accessible and operational with minimal downtime.
    
2. **Scalability**: Building a scalable application allows it to handle varying workloads and accommodate increased traffic or demand. Scalability involves the ability to dynamically allocate resources, horizontally or vertically scale, and leverage cloud services like auto-scaling to ensure optimal performance as the workload fluctuates.
    
3. **Reliability**: Reliability focuses on the stability and consistency of the application's performance. It involves designing robust architectures, using fault-tolerant mechanisms, and implementing error handling and recovery strategies to prevent system failures and data loss.
    
4. **Predictability**: Predictability refers to having a consistent and predictable performance of the application. It involves setting and meeting performance metrics, adhering to defined Service Level Agreements (SLAs), and ensuring that the application performs reliably within expected thresholds.
    
5. **Security**: Security is a critical consideration in the cloud, as it involves protecting sensitive data, preventing unauthorized access, and ensuring compliance with security standards and regulations. It includes implementing encryption, access controls, identity and access management, and monitoring mechanisms to detect and mitigate security threats.
    
6. **Governance**: Governance involves establishing policies, procedures, and controls to ensure the proper use and management of cloud resources. It includes defining roles and responsibilities, enforcing compliance, implementing auditing and monitoring mechanisms, and maintaining transparency and accountability.
    
7. **Manageability**: Manageability focuses on the ease of managing and monitoring the application and its underlying infrastructure. It involves using management tools, automation, and monitoring solutions to efficiently monitor performance, troubleshoot issues, and manage resources in the cloud environment.
    

Considering these factors when building or deploying a cloud application helps organizations create robust, high-performing, and secure solutions that meet user expectations and align with business goals. Each consideration plays a crucial role in ensuring the success and effectiveness of the application in the cloud environment.

---



## Cloud service types

Cloud service types refer to the different categories or models of services offered in cloud computing. These service types provide varying levels of abstraction and functionality to meet the diverse needs of users. There is three main cloud service types.



### Infrastructure as a Service

Infrastructure as a service (IaaS) is the most flexible category of cloud services, as it provides you the maximum amount of control for your cloud resources. In an IaaS model, the cloud provider is responsible for maintaining the hardware, network connectivity (to the internet), and physical security. You’re responsible for everything else: operating system installation, configuration, and maintenance; network configuration; database and storage configuration; and so on. 

With IaaS, you’re essentially renting the hardware in a cloud datacenter, but what you do with that hardware is up to you


Some common scenarios where IaaS might make sense include:

- Lift-and-shift migration: You’re standing up cloud resources similar to your on-prem datacenter, and then simply moving the things running on-prem to running on the IaaS infrastructure.
- Testing and development: You have established configurations for development and test environments that you need to rapidly replicate. You can stand up or shut down the different environments rapidly with an IaaS structure, while maintaining complete control.



### Platform as a Service

Platform as a Service (PaaS) is a cloud computing model that provides a platform and environment for developing, deploying, and managing applications without the need to manage the underlying infrastructure. In PaaS, cloud service providers offer a complete development and runtime environment that includes tools, libraries, frameworks, and services to support the entire application lifecycle.

Platform as a service (PaaS) is a middle ground between renting space in a datacenter (infrastructure as a service) and paying for a complete and deployed solution (software as a service). 

In a PaaS environment, the cloud provider maintains the physical infrastructure, physical security, and connection to the internet. They also maintain the operating systems, middleware, development tools, and business intelligence services that make up a cloud solution. In a PaaS scenario, you don't have to worry about the licensing or patching for operating systems and databases.

PaaS is well suited to provide a complete development environment without the headache of maintaining all the development infrastructure.



### Software as a Service

Software as a service (SaaS) is the most complete cloud service model from a product perspective. With SaaS, you’re essentially renting or using a fully developed application. Email, financial software, messaging applications, and connectivity software are all common examples of a SaaS implementation.

While the SaaS model may be the least flexible, it’s also the easiest to get up and running. It requires the least amount of technical knowledge or expertise to fully employ.



## Appropriate use cases for each cloud service model


1. **Infrastructure as a Service (IaaS)**:

- **Development and Testing Environments**: IaaS is well-suited for creating and managing development and testing environments. It provides developers with the flexibility to provision virtual machines, storage, and networking resources as needed without the upfront investment in physical infrastructure.
    
- **Scalable Web Applications**: IaaS is ideal for hosting and scaling web applications. Organizations can deploy virtual machines and configure load balancing and auto-scaling features to handle varying traffic loads efficiently.
    
- **Data Backup and Recovery**: IaaS can be used for data backup and disaster recovery solutions. Organizations can leverage cloud storage and virtual machine snapshots to store and protect their critical data, ensuring business continuity.
    

2. **Platform as a Service (PaaS)**:

- **Web Application Development**: PaaS is well-suited for building and deploying web applications. Developers can focus on writing code while leveraging the platform's pre-configured infrastructure, development tools, and runtime environments.
    
- **Mobile Application Development**: PaaS platforms often provide mobile backend services and development frameworks. Developers can utilize these services to build and deploy mobile applications more efficiently.
    
- **Data Analytics and Processing**: PaaS offerings can be used for data analytics and processing tasks. Organizations can leverage scalable compute resources and managed data services to perform data analysis, big data processing, and machine learning tasks.
    

3. **Software as a Service (SaaS)**:

- **Customer Relationship Management (CRM)**: SaaS CRM solutions like Salesforce are popular for managing customer relationships, sales pipelines, and customer service processes.
    
- **Collaboration and Productivity Tools**: SaaS tools like Google Workspace, Microsoft Office 365, and project management platforms are widely used for team collaboration, document sharing, email, and productivity applications.
    
- **Human Resources Management**: SaaS HR management platforms offer features like employee onboarding, payroll processing, benefits management, and time tracking.
    
- **Enterprise Resource Planning (ERP)**: SaaS ERP solutions help organizations manage various aspects of their business operations, including finance, inventory, procurement, and supply chain management.