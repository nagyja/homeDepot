import React, { Component } from 'react';

const serves = [
	{serveLinks:"https://secure2.homedepot.com/account/view/order/tracking", text:"Check Order Status"},
	{serveLinks:"www.homedepot.com/c/Credit_Center", text:"Pay Your Credit Card"},
	{serveLinks:"www.homedepot.com/c/Customer_Support_Answers#cancel", text:"Order Cancellation"},
	{serveLinks:"www.homedepot.com/c/Return_Policy", text:"Returns"},
	{serveLinks:"www.homedepot.com/c/About_Your_Online_Order", text:"Shipping & Delivery"},
	{serveLinks:"www.homedepot.com/c/Product_Recalls", text:"Product Recalls"},
	{serveLinks:"www.homedepot.com/c/customer_service", text:"Help & FAQs"}];
const resources=[
	{resourceLinks:"www.homedepot.com/c/Savings_Center", text:"Specials & Offers"},
	{resourceLinks:"www.homedepot.com/c/diy_projects_and_ideas", text:"DIY Projects & Ideas"},
	{resourceLinks:"www.homedepot.com/c/tool_and_truck_rental", text:"Truck &amp; Tool Rental"},
	{resourceLinks:"www.homedepot.com/services/", text:"Home Services"},
	{resourceLinks:"www.homedepot.com/c/Moving_Guide", text:"Moving Services"},
	{resourceLinks:"http://www.homedepotmeasures.com", text:"Real Estate Floor Plan Services"},
	{resourceLinks:"www.homedepot.com/c/The_Home_Depot_Protection_Plans", text:"Protection Plans"},
	{resourceLinks:"http://www6.homedepot.com/rebatefinder/index.html", text:"Rebate Center"},
	{resourceLinks:"www.homedepot.com/c/Gift_Cards", text:"Gift Cards"}];
const abouts =[
	{aboutLinks:"http://careers.homedepot.com", text:"Careers"},
	{aboutLinks:"https://corporate.homedepot.com", text:"Corporate Information"},
	{aboutLinks:"http://builtfromscratch.homedepot.com", text:"Digital Newsroom"},
	{aboutLinks:"http://www.homedepotfoundation.org", text:"Home Depot Foundation"},
	{aboutLinks:"http://ir.homedepot.com", text:"Investor Relations"},
	{aboutLinks:"www.homedepot.com/c/Government_Customers", text:"Government Customers"},
	{aboutLinks:"www.homedepot.com/c/suppliers_and_providers", text:"Suppliers & Providers"},
	{aboutLinks:"www.homedepot.com/c/SF_MS_The_Home_Depot_Affiliate_Program", text:"Affiliate Program"},
	{aboutLinks:"http://ecooptions.homedepot.com", text:"Eco Options"}];
const socials = [
	{source:"../public/assets/socIconFB.png", socialLinks: "https://www.facebook.com/homedepot", title:"Home Depot on Facebook"},
	{source:"../public/assets/socIconTW.png", socialLinks: "https://twitter.com/HomeDepot", title:"Home Depot on Twitter"},
	{source:"../public/assets/socIconPN.png", socialLinks: "http://pinterest.com/homedepot/", title:"Home Depot on Pinterest"},
	{source:"../public/assets/socIconBL.png", socialLinks: "http://ext.homedepot.com/community/blog/", title:"Home Depot Blog"},
	{source:"../public/assets/socIconYT.png", socialLinks: "http://www.youtube.com/user/homedepot", title:"Home Depot on Youtube"},
	{source:"../public/assets/socIconAP.png", socialLinks: "www.homedepot.com/c/SF_Mobile_Shopping", title:"Home Depot Mobile Apps"}];
const legals = [
	{legalLinks:"www.homedepot.com/c/Privacy_Security", text:"Privacy & Security Statement"},
	{legalLinks:"www.homedepot.com/c/Privacy_Security#Information_Collected", text:"Cookie Usage"},
	{legalLinks:"www.homedepot.com/c/Manage_Privacy_Preferences", text:"Manage Privacy Preferences"},
	{legalLinks:"www.homedepot.com/c/California_Privacy_Rights", text:"California Privacy Rights"},
	{legalLinks:"www.homedepot.com/c/California_Supply_Chain_Act", text:"California Supply Chain Act"},
	{legalLinks:"www.homedepot.com/c/site_map", text:"Site Map"},
	{legalLinks:"www.homedepot.com/l/storeDirectory", text:"Store Directory"},
	{legalLinks:"www.homedepot.com", text:"Mobile Site"}];
const Financing = ({action, onActionSelect}) =>{
	return(
		<div id="Financing">
			<div>
				<img src="../public/assets/financing.png" width="40"/>
				<p>Special Financing Available everyday*</p>
			</div>
			<a href="www.homedepot.com/c/Credit_Center" title="Pay & Manage Your Card">Pay & Manage Your Card</a><br/>
			<a href="www.homedepot.com/c/Consumer_Credit_Card" title="Credit Offers">Credit Offers</a>
		</div>
	)
}
const Signup = ({action, onActionSelect}) =>{
	return(
		<div>
			<p>Get $5 off when you sign up for<br/>
			emails with savings and tips.</p>
			<form>
				<input type="email" placeholder="Enter Email Address" size="20"/>
				<button type="submit"><span>GO</span></button>
			</form>
		</div>
	);
}
const Social = ({action, onActionSelect}) =>{
	const SocialLinks = socials.map((social) =>
		<a key={social.text}href={social.socialLinks} title={social.title}>
			<img border="0" src={social.source} width="30" height="30"/>
		</a>
	);

	return(
		<div id="Social">
			{SocialLinks}
		</div>
	);
}
const Legal = ({action, onActionSelect}) =>{
	const LegalLinks = legals.map((legal)=>
		<a key={legal.text} href={legal.legalLinks} title={legal.text}>{legal.text}</a>
	);

 	return(
		<div id="legal" className="col-md-12">
	   		<p>© 2000-2017 Home Depot Product Authority, LLC. All Rights Reserved. Use of this site is subject to certain  
	   			<a href="www.homedepot.com/c/Terms_of_Use"> Terms Of Use</a>
	   		</p>
	   		<p>Local store prices may lety from those displayed. Products shown as available are normally stocked but inventory levels cannot be guaranteed</p>
	   		<p>For screen reader problems with this website, please call 1-800-466-3337.</p>
	   		<ul id="LegalLinks">
	   			{LegalLinks}
	   		</ul>
   		</div>
   	);
}
const Other = ({action, onActionSelect}) =>{
	return(
		<div id="misc" className="ServiceFooterElements col-md-3">
			<Financing/>
			<Signup/>
			<Social/>
		</div>
	);
}
const CustomerService = ({action, onActionSelect}) =>{
	const customerServ = serves.map((serve)=>
		<ul><a key={serve.text} href={serve.serveLinks} title={serve.text}>{serve.text}</a></ul>
	);

	return(
		<div id="CustomerService" className="ServiceFooterElements col-md-2">
	   		<h3>Customer Service</h3>
	   		<ul>
    			{customerServ}				
    		</ul>
		</div>
	);
}
const Resources = ({ action, onActionSelect}) =>{
	const Resourcelinks = resources.map((resource)=>
   		<ul><a key={resource.text}href={resource.resourceLinks} title={resource.text}>{resource.text}</a></ul>
   	);
	
	return(
		<div id="Resources" className="ServiceFooterElements col-md-2">
			<h3>Resources</h3>
			<ul>
   				{Resourcelinks}			
   			</ul>
		</div>
	);
}
const About = ({ action, onActionSelect}) =>{
	const AboutLinks = abouts.map((about)=>
   		<ul><a key={about.text} href={about.aboutLinks} title={about.text}>{about.text}</a></ul>
   	);
   				
	return(
		<div id="About" className="ServiceFooterElements col-md-2">
			<h3>About Us</h3>
			<ul>
   				{AboutLinks}
   			</ul>
		</div>
	);
}
const ServiceFooter = ({ action, onActionSelect}) =>{
	return(
		<div id="ServiceFooter" className="col-md-12">
			<div className="col-md-1"/>
			<CustomerService/>
			<Resources/>
			<About/>
			<Other/>
		</div>
	);
}
const Footing = ({ action, onActionSelect}) =>{
   	return (
	    <div>
	    	<row >
	    		<div id="tagline" className="row col-md-12">
	         		<p id="tagMotto"><strong>More saving. More doing.<span>®</span></strong></p>			
	          		<p id="tagHelp">Need Help? Please call us at:
	    				<a href="tel:+1-800-466-3337" title="Call The Home Depot">
	            			<strong> 1-800-HOME-DEPOT</strong> (1-800-466-3337)
	    				</a>
	    			</p>
	    		</div>  		
	    	</row>
	    	<row>
	    		<ServiceFooter/>
	    	</row>
	    	<row className="col-md-12">
	    		<h3 id="othersitesHead">Our Other Sites</h3>
	    		<div id="othersites">
	    			<a className="othersites" href="http://www.homedepot.ca/" title="The Home Depot Canada">The Home Depot Canada</a>
	    			<a className="othersites" href="http://www.homedepot.com.mx/" title="The Home Depot Mexico">The Home Depot Mexico</a>
	    			<a className="othersites" href="https://www.blinds.com/" title="Blinds.com">Blinds.com</a>
	    			<a className="othersites" href="https://www.proreferral.com/" title="Pro Referral">Pro Referral</a>
	    		</div>
	    	</row>
	    	<row>
	    		<Legal/>
			</row>
		</div>
    )
};

export default Footing;