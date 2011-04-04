## jquery-table-me

# Usage
Just add the classes "paged" and "sortable" to your html table (table must have an id). Example:

&lt;link rel="StyleSheet" href="../src/main/css/tablesorter.css" type="text/css" /&gt;
&lt;link rel="StyleSheet" href="../src/main/css/pagination.css" type="text/css" /&gt;

&lt;script type="text/javascript" src="../src/main/lib/jquery-1.3.2.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="../src/main/lib/jquery.pagination.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="../src/main/lib/jquery.tablesorter.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="../src/main/js/jquery-table-me.js"&gt;&lt;/script&gt;

&lt;html&gt;
&lt;table id="people" class="paged sortable"&gt;
	&lt;thead&gt;
		&lt;tr&gt;
			&lt;th&gt;id&lt;/th&gt;
			&lt;th&gt;Name&lt;/th&gt;
			&lt;th&gt;Birthday year&lt;/th&gt;
		&lt;/tr&gt;
	&lt;/thead&gt;
	&lt;tbody&gt;
		&lt;tr&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;Nelson Ownby&lt;/td&gt;&lt;td&gt;1989&lt;/td&gt;&lt;/tr&gt;
		&lt;tr&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;Javier Stifter&lt;/td&gt;&lt;td&gt;1979&lt;/td&gt;&lt;/tr&gt;
		&lt;tr&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;Tyrone Shiflet&lt;/td&gt;&lt;td&gt;1989&lt;/td&gt;&lt;/tr&gt;
		&lt;tr&gt;&lt;td&gt;4&lt;/td&gt;&lt;td&gt;Lorrie Flohr&lt;/td&gt;&lt;td&gt;1988&lt;/td&gt;&lt;/tr&gt;
		&lt;tr&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;Odessa Sprung&lt;/td&gt;&lt;td&gt;1988&lt;/td&gt;&lt;/tr&gt;
		&lt;tr&gt;&lt;td&gt;6&lt;/td&gt;&lt;td&gt;Margery Demyan&lt;/td&gt;&lt;td&gt;1980&lt;/td&gt;&lt;/tr&gt;
		&lt;tr&gt;&lt;td&gt;7&lt;/td&gt;&lt;td&gt;Karina Pegg&lt;/td&gt;&lt;td&gt;1986&lt;/td&gt;&lt;/tr&gt;
		&lt;tr&gt;&lt;td&gt;8&lt;/td&gt;&lt;td&gt;Allan Durfey&lt;/td&gt;&lt;td&gt;1986&lt;/td&gt;&lt;/tr&gt;
		&lt;tr&gt;&lt;td&gt;9&lt;/td&gt;&lt;td&gt;Nannie Shadduck&lt;/td&gt;&lt;td&gt;1987&lt;/td&gt;&lt;/tr&gt;
		&lt;tr&gt;&lt;td&gt;10&lt;/td&gt;&lt;td&gt;Clayton Saperstein&lt;/td&gt;&lt;td&gt;1981&lt;/td&gt;&lt;/tr&gt;
		&lt;tr&gt;&lt;td&gt;11&lt;/td&gt;&lt;td&gt;Nannie Guercio&lt;/td&gt;&lt;td&gt;1979&lt;/td&gt;&lt;/tr&gt;
		&lt;tr&gt;&lt;td&gt;12&lt;/td&gt;&lt;td&gt;Lonnie Mcmullan&lt;/td&gt;&lt;td&gt;1987&lt;/td&gt;&lt;/tr&gt;
		&lt;tr&gt;&lt;td&gt;13&lt;/td&gt;&lt;td&gt;Alana Haselden&lt;/td&gt;&lt;td&gt;1985&lt;/td&gt;&lt;/tr&gt;
	&lt;/tbody&gt;
	&lt;/table&gt;
&lt;/html&gt;
