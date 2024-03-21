<body>
	<div class="circle"></div>
	<h2 style="font-weight: normal;">Introducing 01</h2>
	<hr />
	<br />
	<video style="width: 100%;" controls poster="https://openinterpreter.com/assets/computer_api.png">
		<source src="https://openinterpreter.com/assets/ncu_short.mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<br /><br />
	<span style="font-weight: bold;">The 01 Project</span> is building a new kind of computer.
	<br /><br />
	Our flagship operating system can power natural language, computer-operating devices like the Rabbit
	R1, Humane Pin, or Star Trek computer.
	<br /><br />
	We intend to become the “GNU/Linux” of this space by committing to staying open-source, modular, and
	free.
	<p><br /></p>
	<h3 id="python-example">Install</h3>
	<pre><code
			>git clone https://github.com/OpenInterpreter/01.git

poetry install
poetry run 01</code
		></pre>
	<p><br /></p>
	<p>
		<sup>This API was designed in Seattle for code interpreting language models.</sup>
		<sup>Last modified March 10th, 2024</sup>
	</p>
	<hr />
</body>

<style>
	body {
		line-height: 1.4;
		font-size: 16px;
		padding: 0 10px;
		margin: 50px auto;
		max-width: 650px;
		/* margin-top:70px; */
	}
	.circle {
		width: 20px; /* Width of the circle */
		margin-bottom: 30px;
		height: 20px; /* Height of the circle */
		border: 1px solid black; /* Border of the circle */
		background-color: transparent; /* Background color of the circle */
		border-radius: 50%; /* Makes the edges fully rounded */
	}
	.filled-circle {
		width: 20px; /* Width of the circle */
		margin-bottom: 30px;
		height: 20px; /* Height of the circle */
		background-color: black; /* Background color of the circle */
		border-radius: 50%; /* Makes the edges fully rounded */
	}
	code {
		font-size: medium;
	}
	pre {
		background-color: black;
		color: white;
		text-wrap: wrap;
		padding: 20px;
		/*border-radius: 5px*/
	}
</style>
