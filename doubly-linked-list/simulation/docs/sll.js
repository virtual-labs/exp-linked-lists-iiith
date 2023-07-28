function singlylinkedlist() {
            function node(val) {
	    this.val = val;
	    this.next = null;
	};
            this.head = null;
            this.insert_head = function(val) {
	    var newnode = new node(val); 
	        newnode.next = this.head;
	        this.head = newnode;
	  }
            this.insert_tail = function(val) {
	    var newnode = new node(val), 
	        temp = this.head;
	    
	    if(!temp) 
	    	this.head = newnode;
	    
	    while(temp.next) 
	    	temp = temp.next;
	    
	    temp.next = newnode;
	  }
	    this.insert_after = function(prevnode,val) {
	    var newnode = new node(val);
	    	newnode.next = prevnode.next;
	    	prevnode.next = newnode;
	   }
	    this.search = function(val) {
	    var temp = this.head; 
	    while(temp) {
	    	if (temp.val==val)
	    	{
                   console.log('The key is there in linked list');   	
                   return temp;
                }
	    	temp = temp.next;
	    }
            console.log('The key is not there in linked list');   	
	    return temp;
	  }    
	    this.remove = function(val) {
	    var temp = this.head; 
	    var flag = 0;
	    var prev = null;
	    if (temp != null && temp.val==val)
	    {
	    	this.head = temp.next;
	    	flag = 1;
                console.log('The key is deleted');
	    	return flag;
	    }

	    while (temp != null && temp.val != val)
	    {
	    	prev = temp;
	    	temp = temp.next;
	    }

	    if (temp == null)
            {
                console.log('The key is not there in linked list');
	    	return flag;
            }
	    prev.next = temp.next;
	    flag = 1;
            console.log('The key is deleted');
	    return flag;
	  }
	    this.display_list = function() {
	    var temp = this.head; 
	    	while (temp != null)
	    	{
	    		console.log(temp.val)
	    		temp = temp.next;
	    	}
	  }

}
list = new singlylinkedlist();
list.insert_head(5);
list.insert_head(3);
list.insert_tail(7);
list.insert_head(11);
list.remove(7);
list.display_list();
