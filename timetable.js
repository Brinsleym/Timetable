Module.register("timetable",{
	// Default module config.
	defaults: {
		text: "Your Timetable for today:"
    text: "
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});
