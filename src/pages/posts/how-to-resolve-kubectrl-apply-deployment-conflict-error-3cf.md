---
stackbit_url_path: posts/how-to-resolve-kubectrl-apply-deployment-conflict-error-3cf
title: How to resolve `kubectrl apply`deployment conflict error
date: '2020-10-29T09:48:06.615Z'
excerpt: >-
  Symton   When you try to apply a deployment yaml file to kubernetes cluster,
  you get the err...
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--wT8jX_j4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ju0370wsh7av3o5fu5si.png
comments_count: 0
positive_reactions_count: 6
tags:
  - k8s
  - kubernetes
  - devops
  - deployment
canonical_url: >-
  https://dev.to/jefftian/how-to-resolve-kubectrl-apply-deployment-conflict-error-3cf
template: post
---
## Symton
When you try to apply a deployment yaml file to kubernetes cluster, you get the error:


```
kubectl apply -f tmp.yaml

The Deployment "xxx" is invalid:
* spec.template.spec.containers[0].env[53].valueFrom: Invalid value: "": may not be specified when `
value
` is not empty
```


## Analysis

The kubernetes api met some issues when diff your 
`tmp.yaml`
 with the current running deployment.

For example, your current running deployment file has a hardcoded environment, and your new tmp.yaml has an environment whose value is reading from other sources:


```
# current running deployment
- name: EXPRESS_LOG_LEVEL
  value: debug

# You are trying to update to
- name: EXPRESS_LOG_LEVEL
  valueFrom:
    configMapKeyRef:
      name: xxx-configmap
      key: EXPRESS_LOG_LEVEL
```


## How do I manually diff?

You can export the current deployment yaml by:


```
kubectl get deploy/your-current-deploy -o yaml | pbcopy
```


Then you can diff them via https://www.diffchecker.com/diff .

## Solution

Delete the conflicted environments and then apply again:


```
KUBE_EDITOR="vim" kubectl edit deploy/your-current-deploy

kubectl apply -f tmp.yaml

# Now you get the success message!
deployment.apps/xxx-app configured
```


*[This post is also available on DEV.](https://dev.to/jefftian/how-to-resolve-kubectrl-apply-deployment-conflict-error-3cf)*


<script>
const parent = document.getElementsByTagName('head')[0];
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.1.1/iframeResizer.min.js';
script.charset = 'utf-8';
script.onload = function() {
    window.iFrameResize({}, '.liquidTag');
};
parent.appendChild(script);
</script>    
