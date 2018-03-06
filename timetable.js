Module.register("timetable",{
	// Default module config.
	defaults: {
		title: "Your Timetable for today:";
       		text: timetable.Table;
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});
