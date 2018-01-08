package com.tns.gen.com.google.common.util.concurrent;

public class FutureCallback implements com.google.common.util.concurrent.FutureCallback {
	public FutureCallback() {
		com.tns.Runtime.initInstance(this);
	}

	public void onSuccess(java.lang.Object param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onSuccess", void.class, args);
	}

	public void onFailure(java.lang.Throwable param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onFailure", void.class, args);
	}

}
